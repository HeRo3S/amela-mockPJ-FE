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
import React, { ChangeEvent, SetStateAction } from "react";
import { IAccCreateFormData } from "interfaces";
import dayjs from "dayjs";
import {
  DIV_SELECT_ITEMS,
  GENDER_SELECT_ITEMS,
  ROLE_SELECT_ITEMS,
} from "constants/forms";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IProps {
  file: File | null;
  setFile: React.Dispatch<SetStateAction<File | null>>;
  info: IAccCreateFormData;
  setInfo: React.Dispatch<SetStateAction<IAccCreateFormData>>;
  editingMode?: boolean | false;
  adminMode?: boolean | false;
  onClickSubmitForm: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function AccountForm(props: IProps) {
  const {
    file,
    setFile,
    info,
    setInfo,
    editingMode,
    adminMode,
    onClickSubmitForm,
  } = props;

  const formik = useFormik({
    initialValues: info,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Vui lòng nhập đúng email")
        .max(255)
        .required("Vui lòng nhập email"),
      firstName: Yup.string().max(50).required("Vui lòng nhập tên người dùng"),
    }),
    onSubmit: () => {},
  });

  function handleChangeAvtInput(e: ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files ? e.target.files[0] : null);
  }
  function handleFormChange(e: ChangeEvent<HTMLInputElement>) {
    formik.handleChange(e);
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card elevation={20}>
          <CardContent>
            <div className={styles.avtCardWrapper}>
              <Avatar
                className={styles.avt}
                src={
                  file ? URL.createObjectURL(file) : info.avtString || undefined
                }
              ></Avatar>
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
          <CardActions>
            <Button fullWidth variant="text" component="label">
              Đăng tải avatar
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handleChangeAvtInput(e)}
              />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card elevation={20}>
          <form noValidate onSubmit={formik.handleSubmit}>
            <CardHeader
              title="Thông tin"
              subheader={
                editingMode
                  ? "Chỉnh sửa thông tin của bạn tại đây"
                  : "Nhập thông tin tài khoản tại đây"
              }
              className={styles.cardFormHeader}
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    // helperText="Please specify the first name"
                    label="Họ"
                    name="lastName"
                    onChange={handleFormChange}
                    value={info.lastName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    error={
                      !!(formik.touched.firstName && formik.errors.firstName)
                    }
                    required
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    label="Tên"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={handleFormChange}
                    value={formik.values.firstName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    error={!!(formik.touched.email && formik.errors.email)}
                    required
                    helperText={formik.touched.email && formik.errors.email}
                    disabled={editingMode}
                    label="Email"
                    name="email"
                    type="email"
                    onBlur={formik.handleBlur}
                    onChange={handleFormChange}
                    value={formik.values.email}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    name="phoneNumber"
                    type="tel"
                    onChange={handleFormChange}
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
                    value={dayjs(info?.dateOfBirth || undefined)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    select
                    label="Giới tính"
                    name="gender"
                    onChange={handleFormChange}
                    value={info.gender}
                  >
                    {GENDER_SELECT_ITEMS.map((e) => (
                      <MenuItem key={e.value} value={e.value}>
                        {e.displayname}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    select
                    disabled={!adminMode}
                    label="Vai trò"
                    name="role"
                    onChange={handleFormChange}
                    value={info.role}
                  >
                    {ROLE_SELECT_ITEMS.map((e) => (
                      <MenuItem key={e.value} value={e.value}>
                        {e.displayname}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    select
                    disabled={!adminMode}
                    label="Bộ phận"
                    name="division"
                    onChange={handleFormChange}
                    value={info.division}
                  >
                    {DIV_SELECT_ITEMS.map((e) => (
                      <MenuItem key={e.value} value={e.value}>
                        {e.displayname}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Giới thiệu"
                    name="bio"
                    onChange={handleFormChange}
                    value={info.bio}
                  />
                </Grid>
                {!editingMode && (
                  <>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        required
                        label="Mật khẩu"
                        name="password"
                        onChange={handleFormChange}
                        value={info.password}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        required
                        label="Nhập lại mật khẩu"
                        name="passwordConfirm"
                        onChange={handleFormChange}
                        value={info.passwordConfirm}
                      />
                    </Grid>
                  </>
                )}
              </Grid>
            </CardContent>
            <CardActions className={styles.cardFormActions}>
              <Button variant="contained" onClick={onClickSubmitForm}>
                {editingMode ? "Lưu" : "Tạo"}
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}
