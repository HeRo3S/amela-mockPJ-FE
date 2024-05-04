import { ROUTERS } from "constants/routers";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./styles.module.scss";
import AuthWrapper from "wrappers/AuthWrapper";
import ScrollToTop from "wrappers/ScrollToTop";
import AdminDashboard from "pages/Admin/AdminDashboard";

const Login = lazy(() => import("pages/Login"));
const SignUp = lazy(() => import("pages/SignUp"));
const ForgotPassword = lazy(() => import("pages/ForgotPassword"));

export default function AppWrapper() {
  return (
    <div className={styles.rootWrapper}>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTERS.AUTH.LOGIN} element={<Login />} />
        <Route path={ROUTERS.AUTH.SIGN_UP} element={<SignUp />} />
        <Route
          path={ROUTERS.AUTH.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        ></Route>
        <Route path={ROUTERS.HOME} element={<AuthWrapper />}>
          <Route path={ROUTERS.ADMIN.DASHBOARD} element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}
