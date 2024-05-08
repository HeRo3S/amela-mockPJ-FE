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
import dayjs, { Dayjs } from "dayjs";
import { IScheduleNotification, ISetScheduleNotification } from "interfaces";
import { ChangeEvent, useState } from "react";

interface IProps {
  createNewMode?: boolean | false;
  data: IScheduleNotification;
  onChangeTextFieldFn: (key: string, value: string) => void;
  onClickHandleButton: (newValue: ISetScheduleNotification) => void;
}
export default function NotificationForm(props: IProps) {
  const { createNewMode, data, onClickHandleButton, onChangeTextFieldFn } =
    props;

  const onChangeDateTimePicker = (value: Dayjs | null) => {
    if (value === null) return;
    onChangeTextFieldFn("releaseDate", value.format());
  };

  return (
    <Card className={styles.card}>
      <CardHeader subheader="Chi tiết thông báo" />
      <CardContent className={styles.cardContent}>
        <div className={styles["date-time-wrapper"]}>
          <DatePicker
            label="Ngày đăng bài"
            value={dayjs(data.releaseDate)}
            onChange={(value) => onChangeDateTimePicker(value)}
          />
          <TimePicker
            label="Giờ đăng bài"
            value={dayjs(data.releaseDate)}
            onChange={(value) => onChangeDateTimePicker(value)}
          />
        </div>
        <TextField
          fullWidth
          label="Tiêu đề"
          value={data.title}
          onChange={(e) => onChangeTextFieldFn("title", e.target.value)}
        />
        <CustomEditor
          data={data?.content}
          onChangeFunction={onChangeTextFieldFn}
        />
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button variant="contained" onClick={onClickHandleButton}>
          {createNewMode ? "Tạo" : "Lưu"}
        </Button>
      </CardActions>
    </Card>
  );
}
