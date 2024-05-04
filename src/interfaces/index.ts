export interface interfaces {}

export interface INoticeProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
  description: string;
}

export interface EventData {
  date: string;
  start: string;
  end: string;
  status: string;
}
