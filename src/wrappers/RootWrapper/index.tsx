import { ROUTERS } from "constants/routers";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./styles.module.scss";
import AuthWrapper from "wrappers/AuthWrapper";
import AdminWrapper from "wrappers/AdminWrapper";
import ScrollToTop from "wrappers/ScrollToTop";
import AdminDashboard from "pages/Admin/AdminDashboard";
import AdminCreateAccount from "pages/Admin/AdminCreateAccount";
import AdminEmployeesList from "pages/Admin/AdminEmployeesList";
import MyAccount from "pages/User/MyAccount";
import AdminCreateNoti from "pages/Admin/AdminCreateNoti";
import NotificationPost from "pages/NotificationPost";
import ViewAccount from "pages/User/ViewAccount";
import AdminEditAccount from "pages/Admin/AdminEditAccount";
import GlobalAlert from "components/Alert/GlobalAlert";

const Login = lazy(() => import("pages/Login"));
const SignUp = lazy(() => import("pages/SignUp"));
const ForgotPassword = lazy(() => import("pages/ForgotPassword"));

export default function AppWrapper() {
  return (
    <div className={styles.rootWrapper}>
      <ScrollToTop />
      <GlobalAlert />

      <Routes>
        <Route path={ROUTERS.AUTH.LOGIN} element={<Login />} />
        <Route path={ROUTERS.AUTH.SIGN_UP} element={<SignUp />} />
        <Route
          path={ROUTERS.AUTH.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        ></Route>

        <Route path={ROUTERS.HOME} element={<AuthWrapper />}>
          <Route
            path={ROUTERS.USER.NOTIFICATION}
            element={<NotificationPost />}
          />
          <Route path={ROUTERS.USER.MY_ACCOUNT} element={<MyAccount />} />
          <Route path={ROUTERS.USER.SEE_PROFILE} element={<ViewAccount />} />
        </Route>

        <Route path={ROUTERS.ADMIN.ROOT} element={<AdminWrapper />}>
          <Route path={ROUTERS.ADMIN.DASHBOARD} element={<AdminDashboard />} />
          <Route
            path={ROUTERS.ADMIN.CREATE_ACCOUNT}
            element={<AdminCreateAccount />}
          />
          <Route
            path={ROUTERS.ADMIN.CREATE_NOTIFICATION}
            element={<AdminCreateNoti />}
          />
          <Route
            path={ROUTERS.ADMIN.EMPLOYEES_LIST}
            element={<AdminEmployeesList />}
          />
          <Route
            path={ROUTERS.ADMIN.EDIT_ACCOUNT}
            element={<AdminEditAccount />}
          />
        </Route>
      </Routes>
    </div>
  );
}
