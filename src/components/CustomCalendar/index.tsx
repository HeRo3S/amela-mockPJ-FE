import { Calendar, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { useCallback, useMemo } from "react";
import event from "./event";
import styles from "./style.module.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
import classNames from "classnames";
import CheckInData from "./checkinData";
import CustomEventWrapper from "./CustomEventWrapper";

const localizer = dayjsLocalizer(dayjs);

export function CustomCalendar() {
  const dayPropGetter = useCallback((date: Date) => {
    const dateKey = dayjs(date).format("YYYY/MM/DD");
    if (CheckInData[dateKey as keyof typeof CheckInData]) {
      let className;
      switch (CheckInData[dateKey as keyof typeof CheckInData].status) {
        case "FULL":
          className = styles.ccBgDayfull;
          break;
        case "HALF":
          className = styles.ccBgDayhalf;
          break;
        case "ABSENT":
          className = styles.ccBgDayoff;
          break;
        default:
          break;
      }
      return { className: className };
    }
  }, []);

  const { components, defaultDate, max, views, events } = useMemo(
    () => ({
      components: {
        event: CustomEventWrapper,
      },
      defaultDate: new Date(),
      max: dayjs().endOf("day").subtract(1, "hours").toDate(),
      views: ["month"],
      // convert events to the correct data type
      events: Object.values(CheckInData).map((e) => ({
        ...e,
        start: e.start ? new Date(e.start) : null,
        end: e.end ? new Date(e.end) : null,
        allDay: true,
      })),
    }),
    [CheckInData]
  );

  console.log(events);

  return (
    <div className={styles.calendarWrapper}>
      <Calendar
        localizer={localizer}
        components={components}
        defaultDate={defaultDate}
        dayPropGetter={dayPropGetter}
        max={max}
        views={views}
        events={events}
      ></Calendar>
    </div>
  );
}
