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
    dateOfBirth: (new Date("2001/09/25")).toUTCString(),
    gender: "male",
    role: "Frontend Developer",
    division: "hades",
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
    dateOfBirth: (new Date("2001/09/25")).toUTCString(),
    gender: "male",
    role: "admin",
    division: "hr",
    bio: "",
    avtString: "",
    password: "1234",
  },
];

export default MockAccounts;
