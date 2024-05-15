import { ICheckInData } from "interfaces";
import dayjs from "dayjs";
import { fakerVI } from "@faker-js/faker";

function checkStatus(startTime: string, endTime: string) {
  const eightOclock = dayjs("8:00", "HH:mm");
  const seventeenThirty = dayjs("17:30", "HH:mm");
  if (
    (dayjs(startTime).hour() >= eightOclock.hour() &&
      dayjs(startTime).minute() > eightOclock.minute()) ||
    dayjs(endTime).hour() < seventeenThirty.hour() ||
    (dayjs(endTime).hour() === seventeenThirty.hour() &&
      dayjs(endTime).minute() < seventeenThirty.minute())
  )
    return "HALF";
  return "FULL";
}

function randomizeCheckInData(elaspedDay: number) {
  const date = dayjs().subtract(elaspedDay, "day").format("YYYY/MM/DD");
  if (dayjs(date).day() === 0 || dayjs(date).day() === 6) return null;

  const startTime = fakerVI.date
    .between({
      from: dayjs(date).set("hour", 7).set("minute", 35).format(),
      to: dayjs(date).set("hour", 8).set("minute", 35).format(),
    })
    .toUTCString();

  const endTime = fakerVI.date
    .between({
      from: dayjs(date).set("hour", 17).set("minute", 25).format(),
      to: dayjs(date).set("hour", 18).set("minute", 35).format(),
    })
    .toUTCString();

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

for (let i = 100; i >= 3; i--) {
  const newItem = randomizeCheckInData(i);
  newItem && CheckInData.push(newItem);
}
export default CheckInData;
