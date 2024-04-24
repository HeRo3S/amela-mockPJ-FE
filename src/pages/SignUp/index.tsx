import AuthLayout from "components/Layout/AuthLayout";
import { Paper, Typography } from "@mui/material";

export default function SignUp() {
  return (
    <AuthLayout>
      <Paper>
        <Typography variant="h4">Đăng ký</Typography>
      </Paper>
    </AuthLayout>
  );
}
