import {
  ChartBarIcon,
  UserIcon,
  UserGroupIcon,
  QrCodeIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentPlusIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { SvgIcon } from "@mui/material";

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
        <ArrowRightOnRectangleIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Đồng nghiệp",
    path: "/user/colleagues",
    icon: (
      <SvgIcon fontSize="small">
        <BanknotesIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tài khoản",
    path: "/user/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
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
        <ArrowRightOnRectangleIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tạo tài khoản nhân viên",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Nhân viên",
    path: "/employees",
    icon: (
      <SvgIcon fontSize="small">
        <BanknotesIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tài khoản cá nhân",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
];

export const adminItems = [
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
        <ArrowRightOnRectangleIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tạo tài khoản nhân viên",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Nhân viên",
    path: "/employees",
    icon: (
      <SvgIcon fontSize="small">
        <BanknotesIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tài khoản cá nhân",
    path: "/account",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
];
