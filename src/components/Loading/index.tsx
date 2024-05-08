import { CircularProgress } from "@mui/material";
import styles from "./style.module.scss";

export default function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <CircularProgress />;
    </div>
  );
}
