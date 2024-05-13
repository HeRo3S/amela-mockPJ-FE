import { http, HttpResponse } from "msw";
import MockEmployessListData from "../objects/employeesList";
import configs from "constants/config";
import { applyPagination } from "utils/hooks/applyPagination";
import API from "constants/api";
import { request } from "http";

export const handlers = [
  http.get("/api/user", () => {
    console.log("Hello!");
    return HttpResponse.json({ name: "John Maverick" });
  }),
  // https://something.com/admin/employees-list?page={page}&size={size}
  http.get(configs.API_DOMAIN + API.GET_EMPLOYEES_LIST, ({ request }) => {
    const url = new URL(request.url);

    const page = url.searchParams.get("page");
    const size = url.searchParams.get("size");
    const searchKey = url.searchParams.get("searchKey");

    const data = MockEmployessListData.filter((e) =>
      `${e.lastName} ${e.firstName}`.includes(searchKey || "")
    );
    if (!page || !size)
      return HttpResponse.json(
        { message: "cannot find page and size" },
        { status: 400 }
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
