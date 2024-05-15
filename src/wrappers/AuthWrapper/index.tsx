import React, { useEffect } from "react";
import Cookies from "js-cookie";
import useProfile from "utils/hooks/useProfile";
import {
  Navigate,
  useLocation,
  useNavigate,
  useOutlet,
} from "react-router-dom";
import DashboardLayout from "components/Layouts/DashboardLayout";
import { useAppSelector } from "utils/hooks/reduxToolkit";
import NoAccess from "components/NoAccess";
import { ROUTERS } from "constants/routers";
import { ROLE_VALUE } from "constants/common";

export default function PageWrapper() {
  const outlet = useOutlet();
  const location = useLocation();
  // DANGER: DO NOT DELETE
  // const isAuthenticated = !!Cookies.get("token");
  // const { profile } = useProfile(isAuthenticated);
  // if (!isAuthenticated) return <Navigate to={ROUTERS.AUTH.LOGIN} />;
  // if (!profile) return null;
  // return (
  //   <div className={styles.pageWrapper}>
  //     <SideNav />
  //     <div className={styles.mainWrapper}>
  //       <PageHeader />
  //       <React.Suspense>
  //         <div className={styles.pageContent}>{outlet}</div>
  //       </React.Suspense>
  //     </div>
  //   </div>
  // );

  // dummier version of check authenticate
  const { userInfo } = useAppSelector((state) => state.auth);
  if (!userInfo?.role) return <Navigate to={ROUTERS.AUTH.LOGIN} />;

  if (location.pathname === ROUTERS.HOME) {
    if (userInfo.role === ROLE_VALUE.ADMIN)
      return <Navigate to={ROUTERS.ADMIN.DASHBOARD} />;
    return <Navigate to={ROUTERS.USER.DASHBOARD} />;
  }

  return (
    <DashboardLayout>
      <React.Suspense>{outlet}</React.Suspense>
    </DashboardLayout>
  );
}

