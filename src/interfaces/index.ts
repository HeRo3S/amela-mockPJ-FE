export interface interfaces {}

export interface INoticeProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
  description: string;
}

export interface ICheckInData {
  date: string;
  startTime: string | null;
  endTime: string | null;
  status: string;
}

export interface IAccCreateFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  role: string;
  division: string;
  bio: string;
  password: string;
  passwordConfirm: string;
}
export interface IGetAccInfo extends IAccCreateFormData {
  [key: string]: unknown;
  _id: string;
  avtString: string;
}
export interface IScheduleNotification {
  [key: string]: unknown;
  id: number;
  author: string;
  title: string;
  releaseDate: string;
  content: string;
}
export interface ISetScheduleNotification {
  [key: string]: unknown;
  id?: number;
  author?: string;
  title?: string;
  releaseDate?: string;
  content?: string;
}
