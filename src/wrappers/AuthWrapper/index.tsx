import React from "react";
import Cookies from "js-cookie";
import useProfile from "utils/hooks/useProfile";
import { Navigate, useOutlet } from "react-router-dom";
import DashboardLayout from "components/Layouts/DashboardLayout";

export default function PageWrapper() {
  const outlet = useOutlet();
  const isAuthenticated = !!Cookies.get("token");
  const { profile } = useProfile(isAuthenticated);

  // DANGER: DO NOT DELETE
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

  return (
    <DashboardLayout>
      <React.Suspense>{outlet}</React.Suspense>
    </DashboardLayout>
  );
}
