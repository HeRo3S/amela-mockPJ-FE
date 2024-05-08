import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import dayjs from "dayjs";
import { IScheduleNotification } from "interfaces";
import styles from "./style.module.scss";

interface IProps {
  data: IScheduleNotification;
  selected: boolean | false;
  onClick: (id: number) => void;
}
export default function NotificationItem(props: IProps) {
  const { data, selected, onClick } = props;
  const { author, title, releaseDate, content, id } = data;

  function onClickListItem(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) {
    onClick(id);
  }
  return (
    <ListItem>
      <ListItemButton
        className={classNames({ [styles.selected]: selected })}
        onClick={(e) => onClickListItem(e, id)}
      >
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <>
              <Typography
                display="inline"
                color="text.primary"
                variant="body2"
                component="span"
              >
                {dayjs(releaseDate).format("DD-MM-YYYY hh:mm")}
              </Typography>
              {` - ${author}`}
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
