import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import styles from "./style.module.scss";

interface IProps {
  name: string;
  label: string;
  value: string;
}
export default function ReadonlyTextField(props: IProps) {
  const { name, label, value } = props;
  return (
    <div className={styles.textfieldWrapper}>
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </div>
  );
}
