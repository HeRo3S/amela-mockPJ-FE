import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import styles from "./style.module.scss";
interface IProps {
  children: React.ReactNode;
}
function DashboardLayout(props: IProps) {
  const { children } = props;
  const pathname = useLocation().pathname;
  const [openNav, setOpenNav] = useState(false);

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  useEffect(
    () => {
      handlePathnameChange();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
      <div className={styles.layoutRoot}>
        <div className={styles.layoutContainer}>{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
