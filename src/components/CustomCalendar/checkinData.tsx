import dayjs from "dayjs";
import { EventData } from "interfaces";
interface IData {
  [key: string]: EventData;
}
const CheckInData: IData = {
  "2024/05/03": {
    date: "2024/05/03",
    start: new Date(2024, 4, 3, 7, 53).toUTCString(),
    end: new Date(2024, 4, 3, 17, 31).toUTCString(),
    status: "FULL",
  },
  "2024/05/06": {
    date: "2024/05/06",
    start: new Date(2024, 4, 6, 8, 1).toUTCString(),
    end: new Date(2024, 4, 6, 17, 30).toUTCString(),
    status: "HALF",
  },
  "2024/05/07": {
    date: "2024/05/07",
    start: "",
    end: "",
    status: "ABSENT",
  },
};
export default CheckInData;
