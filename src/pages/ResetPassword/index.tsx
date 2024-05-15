import { useFormik } from "formik";
import * as Yup from "yup";
import {
  // Alert,
  Box,
  Button,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import AuthLayout from "components/Layouts/AuthLayout";
import { resetPassword } from "api/authentication";
import { useAppDispatch } from "utils/hooks/reduxToolkit";
import { showAlert } from "redux/features/alertSlice";
import { ROUTERS } from "constants/routers";

function ResetPassword() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(50, "Mật khẩu tối đa 50 chữ cái")
        .min(5, "Mật khẩu tối thiểu 5 chữ cái")
        .required("Vui lòng nhập mật khẩu"),
      passwordConfirm: Yup.string().required("Vui lòng xác nhận mật khẩu"),
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        await resetPassword({
          _id: id,
          newPassword: values.password,
          passwordConfirm: values.passwordConfirm,
        });
        dispatch(
          showAlert({
            severity: "success",
            message: "Đã đổi mật khẩu thành công",
          }),
        );
        setIsLoading(false);
        navigate(ROUTERS.AUTH.LOGIN);
      } catch (err) {
        setIsLoading(false);
        dispatch(
          showAlert({
            severity: "error",
            message: err.response.data.message,
          }),
        );
      }
    },
  });

  return (
    <AuthLayout>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Đổi mật khẩu</Typography>
            </Stack>

            <Stack spacing={2}>
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    label="Mật khẩu mới"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.password}
                  />
                  <TextField
                    error={
                      !!(
                        formik.touched.passwordConfirm &&
                        formik.errors.passwordConfirm
                      )
                    }
                    fullWidth
                    helperText={
                      formik.touched.passwordConfirm &&
                      formik.errors.passwordConfirm
                    }
                    label="Nhập lại mật khẩu mới"
                    name="passwordConfirm"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.passwordConfirm}
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
                    sx={{ mt: 3 }}
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowPathIcon />
                      </SvgIcon>
                    }
                    type="submit"
                    variant="contained"
                    disabled
                  >
                    Đang xác nhận
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                  >
                    Xác nhận
                  </Button>
                )}
              </form>
            </Stack>
          </div>
        </Box>
      </Box>
    </AuthLayout>
  );
}

export default ResetPassword;
