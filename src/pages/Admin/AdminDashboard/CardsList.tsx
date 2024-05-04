import {
  BuildingOffice2Icon,
  CheckBadgeIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

interface ICardData {
  title: string;
  data: string;
  icon: JSX.Element;
  iconColor: string;
}
const AdminCardsList: { [key: string]: ICardData } = {
  employeesNumber: {
    title: "Tổng số nhân viên",
    data: "350",
    icon: <UserGroupIcon />,
    iconColor: "error.main",
  },
  yesterdayCheckins: {
    title: "Số nhân viên chấm công hôm qua",
    data: "333",
    icon: <CheckCircleIcon />,
    iconColor: "info.main",
  },
  selfCheckins: {
    title: "Số công đã đi làm trong tháng",
    data: "15",
    icon: <CheckBadgeIcon />,
    iconColor: "success.main",
  },
  onboardDate: {
    title: "Ngày gia nhập",
    data: "03/04/2024",
    icon: <BuildingOffice2Icon />,
    iconColor: "secondary.main",
  },
};

export default AdminCardsList;
