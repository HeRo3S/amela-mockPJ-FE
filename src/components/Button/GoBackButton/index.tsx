import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { Button, SvgIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function GoBackButton() {
  const navigate = useNavigate();

  function onClickNavigateHomeButton() {
    navigate(-1);
  }

  return (
    <Button
      variant="outlined"
      endIcon={<SvgIcon children={<ArrowLeftCircleIcon />} />}
      className={styles.cardBtns}
      onClick={onClickNavigateHomeButton}
    >
      <span>Quay lại </span>
    </Button>
  );
}
