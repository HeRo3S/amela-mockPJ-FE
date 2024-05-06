import { Typography } from "@mui/material";
import AccountForm from "components/AccountForm";
import styles from "./style.module.scss";
import { useState } from "react";
import { IAccCreateFormData } from "interfaces";
import { string } from "yup";
import { useFormik } from "formik";

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
    bio: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <div className={styles.contentWrapper}>
      <Typography variant="h3" gutterBottom className={styles.title}>
        Tạo tài khoản
      </Typography>
      <AccountForm
        file={file}
        setFile={setFile}
        info={accData}
        setInfo={setAccData}
      />
    </div>
  );
}
