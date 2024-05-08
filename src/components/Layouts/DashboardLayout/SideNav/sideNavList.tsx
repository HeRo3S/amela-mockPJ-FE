import {
  ChartBarIcon,
  UserIcon,
  QrCodeIcon,
  UserPlusIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  UsersIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { SvgIcon } from "@mui/material";
import { ROUTERS } from "constants/routers";

interface ListData {
  title: string;
  path: string;
  icon: JSX.Element;
}

export const userItems: ListData[] = [
  {
    title: "Trang chủ",
    path: "/user/dashboard",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Chấm công",
    path: "/user/checkin",
    icon: (
      <SvgIcon fontSize="small">
        <QrCodeIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Lịch sử chấm công",
    path: "/user/attendances",
    icon: (
      <SvgIcon fontSize="small">
        <CalendarDaysIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Đồng nghiệp",
    path: "/user/colleagues",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tài khoản",
    path: ROUTERS.USER.MY_ACCOUNT,
    icon: (
      <SvgIcon fontSize="small">
        <UserCircleIcon />
      </SvgIcon>
    ),
  },
];

export const hrItems = [
  {
    title: "Trang chủ",
    path: "/dashboard",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Chấm công",
    path: "/checkin",
    icon: (
      <SvgIcon fontSize="small">
        <QrCodeIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Lịch sử chấm công",
    path: "/attendances",
    icon: (
      <SvgIcon fontSize="small">
        <CalendarDaysIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tạo tài khoản nhân viên",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Nhân viên",
    path: "/employees",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tài khoản cá nhân",
    path: ROUTERS.USER.MY_ACCOUNT,
    icon: (
      <SvgIcon fontSize="small">
        <UserCircleIcon />
      </SvgIcon>
    ),
  },
];

export const adminItems = [
  {
    title: "Trang chủ",
    path: ROUTERS.ADMIN.DASHBOARD,
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Chấm công",
    path: "/checkin",
    icon: (
      <SvgIcon fontSize="small">
        <QrCodeIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Lịch sử chấm công",
    path: "/attendances",
    icon: (
      <SvgIcon fontSize="small">
        <CalendarDaysIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tạo thông báo",
    path: ROUTERS.ADMIN.CREATE_NOTIFICATION,
    icon: (
      <SvgIcon fontSize="small">
        <BellAlertIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tạo tài khoản nhân viên",
    path: ROUTERS.ADMIN.CREATE_ACCOUNT,
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Nhân viên",
    path: ROUTERS.ADMIN.EMPLOYEES_LIST,
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tài khoản cá nhân",
    path: ROUTERS.USER.MY_ACCOUNT,
    icon: (
      <SvgIcon fontSize="small">
        <UserCircleIcon />
      </SvgIcon>
    ),
  },
];
