interface ISelectItem {
  value: string;
  displayname: string;
}

export const GENDER_SELECT_ITEMS: ISelectItem[] = [
  { value: "Male", displayname: "Nam" },
  { value: "Female", displayname: "Nữ" },
  { value: "Other", displayname: "Khác" },
];

export const ROLE_SELECT_ITEMS: ISelectItem[] = [
  { value: "Admin", displayname: "Admin" },
  { value: "PM", displayname: "PM" },
  { value: "Developer", displayname: "Developer" },
  { value: "Tester", displayname: "Tester" },
  { value: "Comtor", displayname: "Comtor" },
  { value: "HR", displayname: "HR" },
];

export const DIV_SELECT_ITEMS: ISelectItem[] = [
  { value: "HR", displayname: "HR" },
  { value: "ALC", displayname: "ALC" },
  { value: "Sales", displayname: "Sales" },
  { value: "Phoenix", displayname: "Phoenix" },
  { value: "Hades", displayname: "Hades" },
  { value: "Warrior", displayname: "Warrior" },
  { value: "Faderless", displayname: "Faderless" },
];

