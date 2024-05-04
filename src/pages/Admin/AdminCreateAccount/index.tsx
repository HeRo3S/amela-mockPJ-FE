import { Typography } from "@mui/material";
import AccountForm from "components/AccountForm";
import styles from "./style.module.scss";

export default function AdminCreateAccount() {
  return (
    <div className={styles.contentWrapper}>
      <Typography variant="h3" gutterBottom>
        Tạo tài khoản
      </Typography>
      <AccountForm />
    </div>
  );
}
