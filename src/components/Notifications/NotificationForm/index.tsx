import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import styles from "./style.module.scss";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import CustomEditor from "components/CustomEditor";
import dayjs from "dayjs";
import { IScheduleNotification } from "interfaces";

interface IProps {
  createNewMode?: boolean | false;
  data?: IScheduleNotification;
  onClickHandleButton: () => void;
}
export default function NotificationForm(props: IProps) {
  const { createNewMode, data, onClickHandleButton } = props;
  return (
    <Card className={styles.card}>
      <CardHeader subheader="Chi tiết thông báo" />
      <CardContent className={styles.cardContent}>
        <div className={styles["date-time-wrapper"]}>
          <DatePicker
            label="Ngày đăng bài"
            value={data?.releaseDate ? dayjs(data.releaseDate) : undefined}
          />
          <TimePicker
            label="Giờ đăng bài"
            value={data?.releaseDate ? dayjs(data.releaseDate) : undefined}
          />
        </div>
        <TextField fullWidth label="Tiêu đề" value={data?.title} />
        <CustomEditor data={data?.content} />
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button variant="contained" onClick={onClickHandleButton}>
          {createNewMode ? "Tạo" : "Lưu"}
        </Button>
      </CardActions>
    </Card>
  );
}
