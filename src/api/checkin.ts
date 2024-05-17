import API from "constants/api";
import { sendGet } from "./axios";
import { ICheckInData } from "interfaces";

export const GetCheckinData: Promise<ICheckInData[]> = (
  month: number,
  year: number
) => {
  return sendGet(API.GET_CHECKIN_DATA, { month, year }) as Promise<
    ICheckInData[]
  >;
};
