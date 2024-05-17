import API from "constants/api";
import { sendPost } from "./axios";

// eslint-disable-next-line import/prefer-default-export
export const signin = (payload: any) => sendPost(API.LOG_IN, payload);
export const resetPassword = (payload: any) =>
  sendPost(API.RESET_PASSWORD, payload);

