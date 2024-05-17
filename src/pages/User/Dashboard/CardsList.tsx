import {
  BuildingOffice2Icon,
  CheckBadgeIcon,
  SunIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

interface ICardData {
  title: string;
  data: string;
  icon: JSX.Element;
  iconColor: string;
}
const UserCardList: { [key: string]: ICardData } = {
  selfCheckins: {
    title: "Số công tháng này",
    data: "15",
    icon: <CheckBadgeIcon />,
    iconColor: "success.main",
  },
  employeesNumber: {
    title: "Số phút muộn tháng này",
    data: "16",
    icon: <ExclamationCircleIcon />,
    iconColor: "error.main",
  },
  vacationsLeft: {
    title: "Số giờ nghỉ phép còn lại",
    data: "10",
    icon: <SunIcon />,
    iconColor: "warning.main",
  },
  onboardDate: {
    title: "Ngày gia nhập",
    data: "03/04/2024",
    icon: <BuildingOffice2Icon />,
    iconColor: "info.main",
  },
};

export default UserCardList;
