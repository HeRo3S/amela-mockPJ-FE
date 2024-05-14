import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import { Avatar, Box, Button, IconButton, Stack, SvgIcon } from "@mui/material";
import { usePopover } from "utils/hooks/usePopover";
import AccountPopover from "../AccountPopover";
import { useSelector } from "react-redux";
import { useAppSelector } from "utils/hooks/reduxToolkit";
import styles from "./style.module.scss";
import NotificationPopper from "../NotificationsPopper";
import { BellIcon } from "@heroicons/react/24/outline";
import NotifiesList from "pages/Admin/AdminCreateNoti/NotifiesList";

interface IProps {
  onNavOpen: () => void;
}
function TopNav(props: IProps) {
  const { onNavOpen } = props;
  const { userInfo } = useAppSelector((state) => state.auth);
  const accountPopover = usePopover();
  const notificationPopper = usePopover();

  return (
    <>
      <Box component="header" className={styles.headerWrapper}>
        <div className={styles.buttonsStack}>
          <Stack alignItems="center" direction="row" spacing={2}>
            <IconButton className={styles.menuButton} onClick={onNavOpen}>
              <SvgIcon fontSize="small">
                <Bars3Icon />
              </SvgIcon>
            </IconButton>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Button
              onClick={notificationPopper.handleToggle}
              ref={notificationPopper.anchorRef}
            >
              <SvgIcon>
                <BellIcon />
              </SvgIcon>
            </Button>
            <Avatar
              className={styles.styledAvt}
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              src={`${import.meta.env.VITE_APP_BE_SERVER_URL}/img/users/${
                userInfo?.photo
              }`}
            />
          </Stack>
        </div>
      </Box>
      <NotificationPopper
        anchorEl={notificationPopper.anchorRef.current}
        open={notificationPopper.open}
        onClose={notificationPopper.handleClose}
        selectedItemId={-1}
        dataList={NotifiesList}
      />
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
}

export default TopNav;
