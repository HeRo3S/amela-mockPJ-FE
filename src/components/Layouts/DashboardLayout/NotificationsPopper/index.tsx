import { Popper } from "@mui/base";
import { ClickAwayListener } from "@mui/material";
import Notifications from "components/Notifications";
import { IScheduleNotification } from "interfaces";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { ROUTERS } from "constants/routers";

interface IProps {
  anchorEl: null | HTMLElement | (() => HTMLElement);
  open: boolean | false;
  onClose: () => void;
  dataList: IScheduleNotification[];
  selectedItemId: number;
}
export default function NotificationPopper(props: IProps) {
  const { anchorEl, open, onClose, dataList, selectedItemId } = props;
  const navigate = useNavigate();
  const onClickNotifyItem = (id: number) => {
    navigate(`${ROUTERS.USER.ORIGINAL_NOTIFICATION}/${id}`);
    onClose();
  };
  return (
    <Popper
      anchorEl={anchorEl}
      open={open}
      placement="top-end"
      className={styles.popperWrapper}
    >
      <ClickAwayListener onClickAway={onClose}>
        <div>
          <Notifications
            dataList={dataList}
            selectedItemId={selectedItemId}
            onClickListItem={onClickNotifyItem}
          />
        </div>
      </ClickAwayListener>
    </Popper>
  );
}
