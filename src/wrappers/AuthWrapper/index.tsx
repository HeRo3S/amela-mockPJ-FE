import React from "react";
import Cookies from "js-cookie";
import PageHeader from "components/PageHeader";
import SideNav from "components/SideNav";
import styles from "./styles.module.scss";
import useProfile from "utils/hooks/useProfile";
import { Navigate, useOutlet } from "react-router-dom";
import { ROUTERS } from "constants/routers";

export default function PageWrapper() {
  const outlet = useOutlet();
  const isAuthenticated = !!Cookies.get("token");
  const { profile } = useProfile(isAuthenticated);

  if (!isAuthenticated) return <Navigate to={ROUTERS.AUTH.LOGIN} />;
  if (!profile) return null;
  return (
    <div className={styles.pageWrapper}>
      <SideNav />
      <div className={styles.mainWrapper}>
        <PageHeader />
        <React.Suspense>
          <div className={styles.pageContent}>{outlet}</div>
        </React.Suspense>
      </div>
    </div>
  );
}
