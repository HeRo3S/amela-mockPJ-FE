import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SvgIcon,
} from "@mui/material";
import styles from "./style.module.scss";
import Loading from "components/Loading";

interface IProps {
  open: boolean;
  onClose: () => void;
  success?: boolean;
  loading?: boolean;
  title: string;
  successMessage: string;
  errorMessage: string;
}
export default function ConfirmationDialog(props: IProps) {
  const { open, onClose, loading, success } = props;
  function renderContent() {
    if (loading) return <Loading />;
    if (success)
      return (
        <>
          <SvgIcon color="success" fontSize="large">
            <CheckCircleIcon />
          </SvgIcon>
          <DialogContentText>Chấm công thành công!</DialogContentText>
        </>
      );
    else
      return (
        <>
          <SvgIcon color="error" fontSize="large">
            <XCircleIcon />
          </SvgIcon>
          <DialogContentText>Chấm công thất bại!</DialogContentText>
        </>
      );
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Thực hiện chấm công</DialogTitle>
      <DialogContent className={styles.dialogContent}>
        {renderContent()}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Thoát</Button>
      </DialogActions>
    </Dialog>
  );
}
