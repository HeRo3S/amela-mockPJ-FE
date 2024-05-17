import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChevronUpDownIcon from "@heroicons/react/24/solid/ChevronUpDownIcon";
import ArrowUturnLeftIcon from "@heroicons/react/24/solid/ArrowUturnLeftIcon";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Theme,
  Typography,
} from "@mui/material";
import { Scrollbar } from "components/Scrollbar";
import { userItems, adminItems, hrItems } from "./sideNavList";
import styles from "./style.module.scss";
import SideNavItem from "../SideNavItem";
import { useAppSelector } from "utils/hooks/reduxToolkit";
import Img from "assets/img";
import { ROUTERS } from "constants/routers";
import { ROLE_SELECT_ITEMS } from "constants/forms";
import { ROLE_VALUE } from "constants/common";

interface IProps {
  onClose: () => void;
  open: boolean;
}
function SideNav(props: IProps) {
  const { open, onClose } = props;
  const { userInfo } = useAppSelector((state) => state.auth);
  const pathname = useLocation().pathname;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  const itemForEachRole = () => {
    let listItems;
    if (!userInfo?.role) {
      console.error("Cannot find user role!");
      return;
    }
    if (userInfo?.role === ROLE_VALUE.ADMIN) listItems = adminItems;
    else listItems = userItems;

    return listItems.map((item) => {
      const active = item.path ? pathname === item.path : false;
      return (
        <SideNavItem
          active={active}
          // disabled={item.disabled}
          // external={item.external}
          icon={item.icon}
          key={item.title}
          path={item.path}
          title={item.title}
        />
      );
    });
  };

  const content = (
    <Scrollbar>
      <Box className={styles.sideNavWrapper}>
        <Box sx={{ p: 3 }}>
          <Box component={Link} to="/" className={styles.logoWrapper}>
            <img alt="" src={Img.logo} />
          </Box>
          <Box className={styles.userInfoWrapper}>
            <div>
              <Typography color="inherit" variant="subtitle1">
                {userInfo?.lastName} {userInfo?.firstName}
              </Typography>
              <Typography color="neutral.400" variant="body2">
                {
                  ROLE_SELECT_ITEMS.find((e) => e.value === userInfo?.role)
                    ?.displayname
                }
              </Typography>
            </div>
            <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
              <ChevronUpDownIcon />
            </SvgIcon>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box component="nav" sx={{ flexGrow: 1, px: 2, py: 3 }}>
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {itemForEachRole()}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box sx={{ px: 2, py: 3 }}>
          <Typography color="neutral.100" variant="subtitle2">
            Amela Technology
          </Typography>
          <Typography color="neutral.500" variant="body2">
            Tầng 5, Tháp A, Toà Keangnam, Mễ Trì, Nam Từ Liêm, Hà Nội
          </Typography>
          <Box className={styles.kitImgWrapper}>
            <img alt="dashboard image" src={Img.kit} />
          </Box>
          <Button
            component={Link}
            endIcon={
              <SvgIcon fontSize="small">
                <ArrowUturnLeftIcon />
              </SvgIcon>
            }
            fullWidth
            to={ROUTERS.HOME}
            sx={{ mt: 2 }}
            // target="_blank"
            variant="contained"
          >
            Quay lại trang chủ
          </Button>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.800",
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}

export default SideNav;
