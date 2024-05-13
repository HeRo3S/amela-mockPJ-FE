import API from "constants/api";
import { sendGet } from "./axios";

export function GetEmployeesList(
  page: number,
  size: number,
  searchKey: string
) {
  return sendGet(API.GET_EMPLOYEES_LIST, { page, size, searchKey });
}

export function GetEmployeeInfoByID(id: string) {
  return sendGet(`${API.GET_EMPLOYEES_ID}/${id}`);
}
