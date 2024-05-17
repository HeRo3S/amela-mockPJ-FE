import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "utils/hooks/reduxToolkit";
import { logout } from "redux/features/authSlice";

interface IProps {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
}

function AccountPopover(props: IProps) {
  const { anchorEl, onClose, open } = props;
  // DANGER: DO NOT MOVE
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.auth.userInfo);

  const handleSignOut = async () => {
    dispatch(logout());
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      slotProps={{ paper: { sx: { width: 200 } } }}
    >
      <Box className={styles.popoverContent}>
        <Typography variant="overline">Tài Khoản</Typography>
        <Typography color="text.secondary" variant="body2">
          {userInfo?.lastName} {userInfo?.firstName}
        </Typography>
      </Box>
      <Divider />
      <MenuList disablePadding dense className={styles.menuList}>
        <MenuItem onClick={handleSignOut}>Đăng xuất</MenuItem>
      </MenuList>
    </Popover>
  );
}

export default AccountPopover;
