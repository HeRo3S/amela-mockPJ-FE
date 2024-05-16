import { Calendar, View, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import classNames from "classnames";
import CustomEventWrapper from "./CustomEventWrapper";
import { Stack, Typography } from "@mui/material";
import styles from "./style.module.scss";
import "./style.module.scss";
import API from "constants/api";
import { useQuery } from "react-query";
import { GetCheckinData } from "api/checkin";
import Loading from "components/Loading";
import { ICheckInData } from "interfaces";

const localizer = dayjsLocalizer(dayjs);

export function CustomCalendar() {
  const [selectedDay, setSelectedDay] = useState(dayjs());

  const { data: CheckInData, isLoading } = useQuery({
    queryKey: [API.GET_CHECKIN_DATA, selectedDay.month(), selectedDay.year()],
    queryFn: () => GetCheckinData(selectedDay.month(), selectedDay.year()),
  });

  const dayPropGetter = useCallback(
    (date: Date, CheckInData: ICheckInData[]) => {
      const dateKey = dayjs(date).format("YYYY/MM/DD");
      const index = CheckInData.findIndex((e) => e.date === dateKey);
      if (index === -1) return {};

      let className;
      switch (CheckInData[index].status) {
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
    },
    []
  );

  const handleNavigate = useCallback(
    (newDate: Date) => {
      setSelectedDay(dayjs(newDate));
    },
    [setSelectedDay]
  );

  const { components, date, max, views, events } = useMemo(
    () => ({
      components: {
        event: CustomEventWrapper,
      },
      date: selectedDay,
      max: dayjs().endOf("day").subtract(1, "hours").toDate(),
      views: { month: true },
      // convert events to the correct data type
      events: CheckInData?.map((e) => ({
        start: e.startTime ? new Date(e.startTime) : new Date(e.date),
        end: e.endTime ? new Date(e.endTime) : new Date(e.date),
        allDay: true,
        data: e,
      })),
    }),
    [CheckInData]
  );

  if (!CheckInData) return <Loading />;

  return (
    <Stack flexGrow={1}>
      <div className={styles.colorExplain}>
        <div className={styles.colorExplainItem}>
          <span className={classNames(styles.dot, styles.ccBgDayfull)} />
          <Typography>Đủ công</Typography>
        </div>
        <div className={styles.colorExplainItem}>
          <span className={classNames(styles.dot, styles.ccBgDayhalf)} />
          <Typography>Thiếu công </Typography>
        </div>
        <div className={styles.colorExplainItem}>
          <span className={classNames(styles.dot, styles.ccBgDayoff)} />
          <Typography>Không có công</Typography>
        </div>
      </div>
      <div className={styles.calendarWrapper}>
        <Calendar
          localizer={localizer}
          components={components}
          date={date.toDate()}
          onNavigate={handleNavigate}
          dayPropGetter={(date) => dayPropGetter(date, CheckInData)}
          max={max}
          views={views}
          events={events}
        ></Calendar>
      </div>
    </Stack>
  );
}
