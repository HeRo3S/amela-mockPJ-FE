import { Card, CardHeader, List, ListSubheader } from "@mui/material";
import NotificationItem from "./NotificationItem";
import styles from "./style.module.scss";
import { IScheduleNotification } from "interfaces";
import { SetStateAction } from "react";

interface IProps {
  dataList: IScheduleNotification[];
  onClickListItem: (id: number) => void;
}
export default function Notifications(props: IProps) {
  const { dataList, onClickListItem } = props;

  return (
    <Card elevation={20} className={styles.card}>
      <CardHeader subheader="Thông báo" />
      <List className={styles.list}>
        {dataList.map((e) => (
          <NotificationItem key={e.id} data={e} onClick={onClickListItem} />
        ))}
      </List>
    </Card>
  );
}
