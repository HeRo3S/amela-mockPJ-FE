import API from "constants/api";
import { sendGet } from "./axios";

export function GetEmployeesList(page: number, size: number) {
  return sendGet(API.GET_EMPLOYEES_LIST, { page, size });
}
