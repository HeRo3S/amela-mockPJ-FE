import { ICheckInData } from "interfaces";
import dayjs from "dayjs";
import { fakerVI } from "@faker-js/faker";

const EIGHT_OCLOCK = dayjs().set("hour", 8).set("minute", 0);
const SEVENTEEN_THIRTY = dayjs().set("hour", 17).set("minute", 30);

function checkStatus(startTime: string, endTime: string) {
  const checkInLate =
    dayjs(startTime).hour() >= EIGHT_OCLOCK.hour() &&
    dayjs(startTime).minute() >= EIGHT_OCLOCK.minute();

  const checkOutEarly =
    dayjs(endTime).hour() < SEVENTEEN_THIRTY.hour() ||
    (dayjs(endTime).hour() === SEVENTEEN_THIRTY.hour() &&
      dayjs(endTime).minute() < SEVENTEEN_THIRTY.minute());

  return checkInLate || checkOutEarly ? "HALF" : "FULL";
}

function randomizeCheckInData(elaspedDay: number): ICheckInData | null {
  const date = dayjs().subtract(elaspedDay, "day").format("YYYY/MM/DD");
  if (dayjs(date).day() === 0 || dayjs(date).day() === 6) return null;

  const startTime = fakerVI.date
    .between({
      from: dayjs(date).set("hour", 7).set("minute", 35).format(),
      to: dayjs(date).set("hour", 8).set("minute", 35).format(),
    })
    .toString();

  const endTime = fakerVI.date
    .between({
      from: dayjs(date).set("hour", 17).set("minute", 25).format(),
      to: dayjs(date).set("hour", 18).set("minute", 35).format(),
    })
    .toString();

  const status = checkStatus(startTime, endTime);

  return {
    date,
    startTime,
    endTime,
    status,
  };
}

const CheckInData: ICheckInData[] = [
  {
    date: "2024/05/13",
    startTime: new Date(2024, 4, 13, 7, 53).toUTCString(),
    endTime: new Date(2024, 4, 13, 17, 31).toUTCString(),
    status: "FULL",
  },
  {
    date: "2024/05/14",
    startTime: new Date(2024, 4, 14, 8, 1).toUTCString(),
    endTime: new Date(2024, 4, 14, 17, 30).toUTCString(),
    status: "HALF",
  },
  {
    date: "2024/05/15",
    startTime: null,
    endTime: null,
    status: "ABSENT",
  },
];

function CreateCheckInData(): ICheckInData[] {
  for (let i = 100; i >= 3; i--) {
    const newItem = randomizeCheckInData(i);
    if (!newItem || CheckInData.find((e) => e.date === newItem.date)) continue;
    CheckInData.push(newItem);
  }
  return CheckInData;
}

export default CreateCheckInData;
