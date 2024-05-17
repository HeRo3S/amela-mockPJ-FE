import { DIV_VALUE, ROLE_VALUE } from "./common";

interface ISelectItem {
  value: string;
  displayname: string;
}

export const GENDER_SELECT_ITEMS: ISelectItem[] = [
  { value: "male", displayname: "Nam" },
  { value: "female", displayname: "Nữ" },
  { value: "other", displayname: "Khác" },
];

export const ROLE_SELECT_ITEMS: ISelectItem[] = [
  { value: ROLE_VALUE.ADMIN, displayname: "Admin" },
  { value: ROLE_VALUE.PM, displayname: "PM" },
  { value: ROLE_VALUE.DEV, displayname: "Developer" },
  { value: ROLE_VALUE.TESTER, displayname: "Tester" },
  { value: ROLE_VALUE.COMTOR, displayname: "Comtor" },
  { value: ROLE_VALUE.HR, displayname: "HR" },
];

export const DIV_SELECT_ITEMS: ISelectItem[] = [
  { value: DIV_VALUE.HR, displayname: "HR" },
  { value: DIV_VALUE.ALC, displayname: "ALC" },
  { value: DIV_VALUE.SALES, displayname: "Sales" },
  { value: DIV_VALUE.PHOENIX, displayname: "Phoenix" },
  { value: DIV_VALUE.HADES, displayname: "Hades" },
  { value: DIV_VALUE.Warrior, displayname: "Warrior" },
  { value: DIV_VALUE.Faderless, displayname: "Faderless" },
];
