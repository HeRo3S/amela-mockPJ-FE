import { Typography } from "@mui/material";
import { EventData } from "interfaces";
import { EventProps } from "react-big-calendar";
import dayjs from "dayjs";

export default function CustomEventWrapper({ event }: EventProps<EventData>) {
  return (
    <>
      <Typography variant="body1">{`In: ${dayjs(event.start).format(
        "HH:mm"
      )}`}</Typography>
      <Typography variant="body1">{`Out: ${dayjs(event.end).format(
        "HH:mm"
      )}`}</Typography>
    </>
  );
}
