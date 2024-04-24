import { ROUTERS } from "constants/routers";
import Tasks from "pages/Tasks";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./styles.module.scss";
import AuthWrapper from "wrappers/AuthWrapper";
import ScrollToTop from "wrappers/ScrollToTop";

const Login = lazy(() => import("pages/Login"));
const SignUp = lazy(() => import("pages/SignUp"));

export default function AppWrapper() {
  return (
    <div className={styles.rootWrapper}>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTERS.AUTH.LOGIN} element={<Login />} />
        <Route path={ROUTERS.AUTH.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTERS.HOME} element={<AuthWrapper />}></Route>
      </Routes>
    </div>
  );
}

