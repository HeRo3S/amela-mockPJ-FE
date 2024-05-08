import {
  Card,
  CardHeader,
  List,
  Button,
  Typography,
  SvgIcon,
} from "@mui/material";
import { PlusIcon } from "@heroicons/react/24/solid";
import NotificationItem from "./NotificationItem";
import styles from "./style.module.scss";
import { IScheduleNotification } from "interfaces";

interface IProps {
  adminMode?: boolean | false;
  dataList: IScheduleNotification[];
  selectedItemId: number;
  onClickListItem: (id: number) => void;
  onClickAdminCreateNewNotification?: () => void;
}
export default function Notifications(props: IProps) {
  const {
    dataList,
    selectedItemId,
    onClickListItem,
    adminMode,
    onClickAdminCreateNewNotification,
  } = props;

  return (
    <Card elevation={20} className={styles.card}>
      <CardHeader subheader="Thông báo" />
      {adminMode && (
        <div className={styles.adminActionWrapper}>
          <Button onClick={onClickAdminCreateNewNotification}>
            <SvgIcon>
              <PlusIcon fontSize="1rem" />
            </SvgIcon>
            <Typography>Thông báo mới</Typography>
          </Button>
        </div>
      )}
      <List className={styles.list}>
        {dataList.map((e) => (
          <NotificationItem
            key={e.id}
            data={e}
            selected={e.id === selectedItemId}
            onClick={onClickListItem}
          />
        ))}
      </List>
    </Card>
  );
}
