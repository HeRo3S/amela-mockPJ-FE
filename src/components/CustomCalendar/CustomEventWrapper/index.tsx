import { Theme, Typography, useMediaQuery } from "@mui/material";
import { ICheckInData } from "interfaces";
import { Event, EventProps } from "react-big-calendar";
import dayjs from "dayjs";
import "./style.module.scss";
import styles from "./style.module.scss";

interface CustomEventData {
  data: ICheckInData;
}
export default function CustomEventWrapper({
  event,
}: EventProps<CustomEventData>) {
  const { data } = event;
  const downXL = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));
  const downSM = useMediaQuery("(max-width: 700px)");

  if (downSM) return <></>;

  if (downXL)
    return (
      <Typography>{`${
        data.startTime ? dayjs(data.startTime).format("HH:mm") : "None"
      } - ${
        data.endTime ? dayjs(data.endTime).format("HH:mm") : "None"
      }`}</Typography>
    );

  return (
    <>
      <Typography variant="body1">{`Checkin: ${
        data.startTime ? dayjs(data.startTime).format("HH:mm") : "None"
      }`}</Typography>
      <Typography variant="body1">{`Checkout: ${
        data.endTime ? dayjs(data.endTime).format("HH:mm") : "None"
      }`}</Typography>
    </>
  );
}
