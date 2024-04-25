import { useCallback, useState } from "react";
import { useFormik } from "formik";
import { Link as ReactLink } from "react-router-dom";
import * as Yup from "yup";
import {
  // Alert,
  Box,
  Button,
  Stack,
  Link,
  SvgIcon,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "components/Layouts/AuthLayout";
import styles from "./style.module.scss";
// import AuthService from "../api/auth";
// import { useDispatch } from "react-redux";
// import { showAlert } from "../redux/features/alertSlice";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { ROUTERS } from "constants/routers";

function ForgotPassword() {
  const [method, setMethod] = useState("email");
  // const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Vui lòng nhập đúng email")
        .max(255)
        .required("Vui lòng nhập email"),
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        await AuthService.forgotPassword({
          email: values.email,
        });
        dispatch(
          showAlert({
            severity: "success",
            message: "Gửi mail thành công. Vui lòng kiểm tra email",
          })
        );
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        dispatch(
          showAlert({
            severity: "error",
            message: err.response.data.message,
          })
        );
      }
    },
  });

  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

  return (
    <Layout>
      <Box className={styles.componentWrapper}>
        <Box className={styles.contentWrapper}>
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">Quên mật khẩu</Typography>
          </Stack>
          <Tabs onChange={handleMethodChange} sx={{ mb: 3 }} value={method}>
            <Tab label="Email" value="email" />
            <Tab label="Số điện thoại" value="phoneNumber" />
          </Tabs>
          {method === "email" && (
            <Stack spacing={2}>
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Địa chỉ email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                </Stack>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                {isLoading ? (
                  <Button
                    fullWidth
                    size="large"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowPathIcon />
                      </SvgIcon>
                    }
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                    disabled
                  >
                    Đang gửi
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                  >
                    Gửi mail
                  </Button>
                )}
              </form>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ marginLeft: "auto!important" }}
              >
                Đã nhớ mật khẩu? &nbsp;
                <Link
                  component={ReactLink}
                  to={ROUTERS.AUTH.LOGIN}
                  underline="hover"
                  variant="subtitle2"
                >
                  Đăng nhập
                </Link>
              </Typography>
            </Stack>
          )}
          {method === "phoneNumber" && (
            <div>
              <Typography sx={{ mb: 1 }} variant="h6">
                Tạm thời không có
              </Typography>
              <Typography color="text.secondary">
                Tính năng đang được phát triển
              </Typography>
            </div>
          )}
        </Box>
      </Box>
    </Layout>
  );
}

export default ForgotPassword;
