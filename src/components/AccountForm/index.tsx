import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./style.module.scss";
import { DatePicker } from "@mui/x-date-pickers";

export default function AccountForm() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card elevation={20}>
          <CardContent>
            <div className={styles.avtCardWrapper}>
              <Avatar className={styles.avt}></Avatar>
              <Typography gutterBottom variant="h5">
                Tên người dùng
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Số điện thoại
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button fullWidth variant="text">
              Đăng tải avatar
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card elevation={20}>
          <CardHeader
            title="Thông tin"
            subheader="Nhập thông tin tài khoản tại đây"
          />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  //   helperText="Please specify the first name"
                  label="Họ"
                  name="lastName"
                  //   onChange={handleChange}
                  //   value={values.lastName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Tên"
                  name="firstName"
                  //   onChange={handleChange}
                  //   value={values.firstName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  name="email"
                  //   onChange={handleChange}
                  //   value={values.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Số điện thoại"
                  name="phoneNumber"
                  type="number"
                  //   onChange={handleChange}
                  //   value={values.phoneNumber}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DatePicker
                  fullWidth
                  format="dd/MM/yyyy"
                  label="Ngày sinh"
                  renderInput={(params) => <TextField required {...params} />}
                  //   onChange={() => {
                  //     setValues((prevState) => ({
                  //       ...prevState,
                  //       dateOfBirth: new Date(event.target.value),
                  //     }));
                  //   }}
                  //   value={values.dateOfBirth}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  select
                  label="Giới tính"
                  name="gender"
                  //   onChange={handleChange}
                  //   value={values.gender}
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
                  select
                  label="Vai trò"
                  name="role"
                  //   onChange={handleChange}
                  //   value={values.role}
                >
                  <MenuItem value="user">Người dùng</MenuItem>
                  <MenuItem value="pt">PT</MenuItem>
                  <MenuItem value="admin">Quản lý</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Giới thiệu"
                  name="bio"
                  //   onChange={handleChange}
                  //   value={values.bio}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Mật khẩu"
                  name="password"
                  //   onChange={handleChange}
                  //   value={values.password}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Nhập lại mật khẩu"
                  name="passwordConfirm"
                  //   onChange={handleChange}
                  //   value={values.passwordConfirm}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
