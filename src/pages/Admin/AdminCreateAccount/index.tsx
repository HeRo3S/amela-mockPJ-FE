import { Typography } from "@mui/material";
import AccountForm from "components/AccountForm";
import styles from "./style.module.scss";
import React, { useState } from "react";
import { IAccCreateFormData } from "interfaces";
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";
import { useDialog } from "utils/hooks/useDialog";

export default function AdminCreateAccount() {
  const [file, setFile] = useState<File | null>(null);
  const [accData, setAccData] = useState<IAccCreateFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    role: "",
    division: "",
    bio: "",
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
        title="Tạo tài khoản"
        successMessage="Tạo tài khoản thành công!"
        errorMessage="Tạo tài khoản thất bại!"
        open={dialogOpen}
        onClose={handleDialogClose}
        success
      />
      <Typography variant="h3" gutterBottom className={styles.title}>
        Tạo tài khoản
      </Typography>
      <AccountForm
        file={file}
        setFile={setFile}
        info={accData}
        setInfo={setAccData}
        adminMode
        onClickSubmitForm={(e) => onClickSubmitForm(e)}
      />
    </div>
  );
}
