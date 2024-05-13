import { Typography } from "@mui/material";
import AccountForm from "components/AccountForm";
import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { IAccCreateFormData } from "interfaces";
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";
import { useDialog } from "utils/hooks/useDialog";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import API from "constants/api";
import { GetEmployeeInfoByID } from "api/employeesList";

export default function AdminEditAccount() {
  const { id } = useParams();

  const { data } = useQuery([API.GET_EMPLOYEES_ID, id], () =>
    GetEmployeeInfoByID(id as string)
  );

  const [file, setFile] = useState<File | null>(null);
  const [accData, setAccData] = useState<IAccCreateFormData>({
    ...data,
  });

  useEffect(() => {
    if (data) setAccData((prev) => (prev = { ...data }));
    console.log(accData, data);
  }, [data]);

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
        title="Chỉnh sửa tài khoản"
        successMessage="Chỉnh sửa tài khoản thành công!"
        errorMessage="Chỉnh sửa tài khoản thất bại!"
        open={dialogOpen}
        onClose={handleDialogClose}
        success
      />
      <Typography variant="h3" gutterBottom className={styles.title}>
        Chỉnh sửa tài khoản
      </Typography>
      <AccountForm
        file={file}
        setFile={setFile}
        info={accData}
        setInfo={setAccData}
        adminMode
        editingMode
        onClickSubmitForm={(e) => onClickSubmitForm(e)}
      />
    </div>
  );
}
