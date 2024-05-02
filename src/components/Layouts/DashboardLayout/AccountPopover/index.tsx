import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../redux/features/authSlice";
import { useAppSelector } from "utils/hooks/reduxToolkit";

interface IProps {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
}

function AccountPopover(props: IProps) {
  const { anchorEl, onClose, open } = props;
  // DANGER: DO NOT MOVE
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const userInfo = useAppSelector((state) => state.auth.userInfo);

  const handleSignOut = async () => {
    //DANGER: DO NOT DELETE
    // await dispatch(logout());
    // navigate("/login");
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
