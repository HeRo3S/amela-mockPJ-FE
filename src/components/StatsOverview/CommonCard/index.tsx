import {
  Avatar,
  Card,
  CardContent,
  SvgIcon,
  Typography,
  Stack,
} from "@mui/material";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  data: string;
  icon: JSX.Element;
  iconColor: string;
}
export default function CommonCard(props: IProps) {
  const { title, data, icon, iconColor } = props;
  return (
    <Card elevation={12} className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Stack spacing={1}>
          <Typography color="text.secondary">{title}</Typography>
          <Typography variant="h4">{data}</Typography>
        </Stack>
        <div>
          <Avatar className={styles.avatar} sx={{ backgroundColor: iconColor }}>
            <SvgIcon>{icon}</SvgIcon>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
}
