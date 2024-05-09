import { http, HttpResponse } from "msw";
import { createMultipleEmployees } from "../objects/employeesList";

export const handlers = [
  http.get("/api/user", () => {
    console.log("Hello!");
    return HttpResponse.json({ name: "John Maverick" });
  }),
];
