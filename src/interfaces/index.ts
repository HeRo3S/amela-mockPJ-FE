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
  bio: string;
  password: string;
  passwordConfirm: string;
}

export interface IScheduleNotification {
  [key: string]: unknown;
  id: number;
  author: string;
  title: string;
  releaseDate: string;
  content: string;
}
