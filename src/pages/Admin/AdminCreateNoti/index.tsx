import { Grid, Typography, Fab } from "@mui/material";
import styles from "./style.module.scss";
import Notifications from "components/Notifications";
import NotificationForm from "components/Notifications/NotificationForm";
import NotifiesList from "./NotifiesList";
import { useState } from "react";
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";
import { IScheduleNotification, ISetScheduleNotification } from "interfaces";
import { useAppSelector } from "utils/hooks/reduxToolkit";
import { useDialog } from "utils/hooks/useDialog";
import PageTitle from "components/Layouts/DashboardLayout/PageTitle";

const INITIAL_STATE_EDITING_ITEM: IScheduleNotification = {
  id: -1,
  author: "",
  title: "",
  releaseDate: "",
  content: "",
};

export default function AdminCreateNoti() {
  const { lastName, firstName } = useAppSelector(
    (state) => state.auth.userInfo
  );
  const [createMode, setCreateMode] = useState<boolean>(
    NotifiesList.length === 0
  );
  const [editingItem, setEditingItem] = useState<IScheduleNotification>(
    NotifiesList[0] || INITIAL_STATE_EDITING_ITEM
  );
  const {
    open: isDialogOpen,
    handleOpen: openDialog,
    handleClose: closeDialog,
  } = useDialog();

  const onClickListItem = (id: number) => {
    setCreateMode(false);
    const item = NotifiesList.find((e) => e.id === id);
    if (!item) {
      throw new Error("can't find item with this id");
    }
    setEditingItem(item);
  };
  const onClickCreateNewNotifyButton = () => {
    setCreateMode(true);
    setEditingItem(INITIAL_STATE_EDITING_ITEM);
  };

  const onChangeTextField = (key: string, value: string) => {
    setEditingItem((prev) => ({
      ...prev,
      author: `${lastName} ${firstName}`,
      [key]: value,
    }));
  };

  function onClickHandleEditNotifyButton() {
    // TODO: handle edit button logic
    // *NOTE: for local data only, change in the future
    const idx = NotifiesList.findIndex((e) => e.id === editingItem.id);
    NotifiesList[idx] = { ...NotifiesList[idx], ...editingItem };
    openDialog();
  }
  function onClickHandleNewNotifyButton() {
    // TODO: handle new button logic
    // *NOTE: for local data only, change in the future
    NotifiesList.push({
      ...editingItem,
      id: NotifiesList[NotifiesList.length - 1].id + 1,
    });
    openDialog();
  }
  return (
    <div className={styles.contentWrapper}>
      <ConfirmationDialog
        open={isDialogOpen}
        onClose={closeDialog}
        title={createMode ? "Tạo thông báo" : "Chỉnh sửa thông báo"}
        success
        successMessage={
          createMode
            ? "Tạo thông báo mới thành công"
            : "Sửa thông báo thành công"
        }
        errorMessage={
          createMode ? "Tạo thông báo mới thất bại" : "Sửa thông báo thất bại"
        }
      />
      <PageTitle text="Đặt lịch thông báo" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Notifications
            dataList={NotifiesList}
            onClickListItem={onClickListItem}
            selectedItemId={editingItem.id}
            adminMode
            onClickAdminCreateNewNotification={onClickCreateNewNotifyButton}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <NotificationForm
            createNewMode={createMode}
            data={editingItem}
            onChangeTextFieldFn={onChangeTextField}
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
