import { notification } from "antd";
import { INoticeProps } from "interfaces";

const CustomNotification = ({ type, message, description }: INoticeProps) => {
  notification.destroy();
  return notification[type]({
    message,
    description,
  });
};

export default CustomNotification;
