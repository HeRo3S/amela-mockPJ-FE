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
