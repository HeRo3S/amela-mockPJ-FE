import { Grid, Typography } from "@mui/material";
import styles from "./style.module.scss";
import Notifications from "components/Notifications";
import NotificationForm from "components/Notifications/NotificationForm";
import NotifiesList from "./NotifiesList";
import { useState } from "react";

export default function AdminCreateNoti() {
  const [createMode, setCreateMode] = useState(NotifiesList.length === 0);
  const [editingItemId, setEditingItemId] = useState<number | undefined>(
    NotifiesList[0]?.id
  );

  const onClickListItem = (id: number) => {
    setEditingItemId(id);
  };
  function onClickHandleEditNotifyButton() {}
  function onClickHandleNewNotifyButton() {}
  return (
    <div className={styles.contentWrapper}>
      <Typography variant="h3" gutterBottom className={styles.title}>
        Đặt lịch thông báo
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Notifications
            dataList={NotifiesList}
            onClickListItem={onClickListItem}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <NotificationForm
            createNewMode={createMode}
            data={
              (!createMode &&
                NotifiesList.find((e) => e.id === editingItemId)) ||
              undefined
            }
            onClickHandleButton={
              createMode
                ? onClickHandleNewNotifyButton
                : onClickHandleEditNotifyButton
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}
