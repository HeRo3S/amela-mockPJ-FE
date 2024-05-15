import { ROLE_VALUE } from "constants/common";
import { IMockUser } from "./employeesList";

interface IDBMockUser extends IMockUser {
  password: string;
}

const MockAccounts: IDBMockUser[] = [
  {
    _id: "1",
    firstName: "Hùng",
    lastName: "Lê",
    email: "hunglt@amela.vn",
    phoneNumber: "0932 042 581",
    dateOfBirth: new Date("2001/09/25").toUTCString(),
    gender: "male",
    role: ROLE_VALUE.DEV,
    division: "Hades",
    bio: "",
    avtString: "",
    password: "1234",
  },
  {
    _id: "0",
    firstName: "Admin",
    lastName: "",
    email: "admin@amela.vn",
    phoneNumber: "0932 042 581",
    dateOfBirth: new Date("2001/09/25").toUTCString(),
    gender: "male",
    role: ROLE_VALUE.ADMIN,
    division: "HR",
    bio: "",
    avtString: "",
    password: "1234",
  },
];

export default MockAccounts;
