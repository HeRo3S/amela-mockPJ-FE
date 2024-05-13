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
    dateOfBirth: "25/09/2001",
    gender: "male",
    role: "Frontend Developer",
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
    dateOfBirth: "25/09/2001",
    gender: "male",
    role: "admin",
    division: "HR",
    bio: "",
    avtString: "",
    password: "1234",
  },
];

export default MockAccounts;
