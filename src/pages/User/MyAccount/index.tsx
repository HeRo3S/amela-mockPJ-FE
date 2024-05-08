import { useState } from "react";
import styles from "../../Admin/AdminCreateAccount/style.module.scss";
import { IAccCreateFormData } from "interfaces";
import { Typography } from "@mui/material";
import AccountForm from "components/AccountForm";
import { useAppSelector } from "utils/hooks/reduxToolkit";
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";
import { useDialog } from "utils/hooks/useDialog";

export default function MyAccount() {
  const [file, setFile] = useState<File | null>(null);
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const [accData, setAccData] = useState<IAccCreateFormData>({
    ...userInfo,
    password: "",
    passwordConfirm: "",
  });

  const {
    open: dialogOpen,
    handleClose: handleDialogClose,
    handleOpen: handleDialogOpen,
    handleToggle: handleDialogToggle,
  } = useDialog();
  function onClickSubmitForm(e: React.MouseEvent<HTMLButtonElement>) {
    // TODO: Create account api here
    handleDialogOpen();
  }

  return (
    <div className={styles.contentWrapper}>
      <ConfirmationDialog
        title="Thay đổi thông tin cá nhân"
        successMessage="Thay đổi thông tin cá nhân thành công"
        errorMessage="Thay đổi thông tin cá nhân thất bại!"
        open={dialogOpen}
        onClose={handleDialogClose}
        success
      />
      <Typography variant="h3" gutterBottom className={styles.title}>
        Tài khoản của tôi
      </Typography>
      <AccountForm
        file={file}
        setFile={setFile}
        info={accData}
        setInfo={setAccData}
        editingMode
        onClickSubmitForm={onClickSubmitForm}
      />
    </div>
  );
}
