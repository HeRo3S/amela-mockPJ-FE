import { ICheckInData } from "interfaces";

const CheckInData: ICheckInData[] = [
  {
    date: "2024/05/03",
    startTime: new Date(2024, 4, 3, 7, 53).toUTCString(),
    endTime: new Date(2024, 4, 3, 17, 31).toUTCString(),
    status: "FULL",
  },
  {
    date: "2024/05/06",
    startTime: new Date(2024, 4, 6, 8, 1).toUTCString(),
    endTime: new Date(2024, 4, 6, 17, 30).toUTCString(),
    status: "HALF",
  },
  {
    date: "2024/05/07",
    startTime: null,
    endTime: null,
    status: "ABSENT",
  },
];
export default CheckInData;
