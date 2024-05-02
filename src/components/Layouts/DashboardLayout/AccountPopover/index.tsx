import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/features/authSlice";

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
  const userInfo = useSelector((state) => state.auth.userInfo);

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
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Tài Khoản</Typography>
        <Typography color="text.secondary" variant="body2">
          {userInfo?.lastName} {userInfo?.firstName}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Đăng xuất</MenuItem>
      </MenuList>
    </Popover>
  );
}

export default AccountPopover;
