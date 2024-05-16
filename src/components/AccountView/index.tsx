import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./style.module.scss";
import { DatePicker } from "@mui/x-date-pickers";
import { IGetAccInfo } from "interfaces";
import dayjs from "dayjs";

interface IProps {
  info: IGetAccInfo;
}
export default function AccountView(props: IProps) {
  const { info } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card elevation={20}>
          <CardContent>
            <div className={styles.avtCardWrapper}>
              <Avatar className={styles.avt} src={info.avtString}></Avatar>
              <Typography gutterBottom variant="h5">
                {info.lastName + info.firstName
                  ? `${info.lastName} ${info.firstName}`
                  : "Tên người dùng"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.email || "Email"}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card elevation={20}>
          <CardHeader
            title="Thông tin khác"
            subheader="Các thông tin khác được hiển thị tại đây"
            className={styles.cardFormHeader}
          />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Họ"
                  name="lastName"
                  value={info.lastName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Tên"
                  name="firstName"
                  value={info.firstName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  name="email"
                  value={info.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Số điện thoại"
                  type="tel"
                  name="phoneNumber"
                  value={info.phoneNumber}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DatePicker
                  format="DD/MM/YYYY"
                  label="Ngày sinh"
                  renderInput={(params) => <TextField required {...params} />}
                  //   onChange={() => {
                  //     setinfo((prevState) => ({
                  //       ...prevState,
                  //       dateOfBirth: new Date(event.target.value),
                  //     }));
                  //   }}
                  value={dayjs(info.dateOfBirth)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  select
                  label="Giới tính"
                  name="gender"
                  value={info.gender}
                >
                  <MenuItem value="male">Nam</MenuItem>
                  <MenuItem value="female">Nữ</MenuItem>
                  <MenuItem value="other">Khác</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Vai trò"
                  name="role"
                  value={info.role}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Bộ phận"
                  name="division"
                  value={info.division}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Giới thiệu"
                  name="bio"
                  value={info.bio}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={styles.cardFormActions}></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
