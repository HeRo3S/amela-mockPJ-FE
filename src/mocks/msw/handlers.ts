import { http, HttpResponse } from "msw";
import MockEmployessListData from "../objects/employeesList";
import configs from "constants/config";
import { applyPagination } from "utils/hooks/applyPagination";
import API from "constants/api";
import MockAccounts from "mocks/objects/userAccount";

export const handlers = [
  http.get("/api/user", () => {
    console.log("Hello!");
    return HttpResponse.json({ name: "John Maverick" });
  }),

  http.post(configs.API_DOMAIN + API.LOG_IN, async ({ request }) => {
    const account = (await request.json()) as {
      email: string;
      password: string;
    };
    if (!account?.email)
      return HttpResponse.json(
        { message: "wrong credentials!" },
        { status: 401 },
      );

    const existedAcc = MockAccounts.find((e) => e.email === account.email);
    if (existedAcc?.password !== account.password) {
      return HttpResponse.json(
        { message: "wrong credentials!" },
        { status: 401 },
      );
    }
    const { password, ...userInfo } = existedAcc;
    return HttpResponse.json({ user: userInfo });
  }),

  http.post(configs.API_DOMAIN + API.RESET_PASSWORD, async ({ request }) => {
    const account = (await request.json()) as {
      _id: string;
      newPassword: string;
    };

    const existedAcc = MockAccounts.find((e) => e._id === account._id);

    if (!existedAcc?.password) {
      return HttpResponse.json(
        { message: "wrong credentials!" },
        { status: 401 },
      );
    }

    existedAcc.password = account.newPassword;
    const { password, ...userInfo } = existedAcc;
    return HttpResponse.json({ user: userInfo });
  }),

  // https://something.com/admin/employees-list?page={page}&size={size}
  http.get(configs.API_DOMAIN + API.GET_EMPLOYEES_LIST, ({ request }) => {
    const url = new URL(request.url);

    const page = url.searchParams.get("page");
    const size = url.searchParams.get("size");
    const searchKey = url.searchParams.get("searchKey");

    const data = MockEmployessListData.filter((e) =>
      `${e.lastName} ${e.firstName}`.includes(searchKey || ""),
    );
    if (!page || !size)
      return HttpResponse.json(
        { message: "cannot find page and size" },
        { status: 400 },
      );
    return HttpResponse.json({
      pageData: applyPagination(data, +page, +size),
      length: MockEmployessListData.length,
    });
  }),

  http.get(`${configs.API_DOMAIN}${API.GET_EMPLOYEES_ID}/:id`, ({ params }) => {
    const result = MockEmployessListData.find((e) => e._id === params.id);
    return HttpResponse.json(result);
  }),
];
