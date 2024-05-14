import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  SvgIcon,
  Typography,
} from "@mui/material";
import NotFound from "components/NotFound";
import NotifiesList from "pages/Admin/AdminCreateNoti/NotifiesList";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import styles from "./style.module.scss";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export default function NotificationPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    console.error("can't find notification ID");
    return <NotFound />;
  }

  const data = NotifiesList.find((e) => e.id === +id);
  if (!data) {
    console.error("can't find notification ID");
    return <NotFound />;
  }

  function ParsingCKEditiorContent(content: string) {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(content, "text/html");
    return htmlDoc.body.innerHTML;
  }

  function onClickNavigateHomeButton() {
    navigate(-1);
  }

  return (
    <div className={styles.contentWrapper}>
      <Typography variant="h4" className={styles.title}>
        Thông báo
      </Typography>
      <Card elevation={20} className={styles.card}>
        <CardHeader
          title={data.title}
          subheader={
            <Typography>
              {`${data.author}`}
              <Typography
                color="text.secondary"
                sx={{ display: "inline-block" }}
              >{`\u00A0- ${dayjs(data.releaseDate).format(
                "DD/MM/YYYY"
              )}`}</Typography>
            </Typography>
          }
          avatar={<Avatar />}
        />

        <CardContent>
          <Typography paragraph>
            {ParsingCKEditiorContent(data.content)}
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Button
            variant="outlined"
            endIcon={<SvgIcon children={<ArrowLeftCircleIcon />} />}
            className={styles.cardBtns}
            onClick={onClickNavigateHomeButton}
          >
            <span>Quay về trang trước</span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
