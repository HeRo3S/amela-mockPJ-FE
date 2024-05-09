import { http, HttpResponse } from "msw";
import { createMultipleEmployees } from "../objects/employeesList";
import configs from "constants/config";

export const handlers = [
  http.get("/api/user", () => {
    console.log("Hello!");
    return HttpResponse.json({ name: "John Maverick" });
  }),
  http.get(configs.API_DOMAIN + "admin/employees-list", () => {
    return HttpResponse.json(createMultipleEmployees(35));
  }),
];
