import { fakerVI } from "@faker-js/faker";

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  role: string;
  division: string;
  bio: string;
  avtString: string;
}

function createRandomEmployee(): IUser {
  const _id = fakerVI.string.uuid();
  const sexType = fakerVI.person.sexType();
  const gender = fakerVI.person.sex();
  const firstName = fakerVI.person.firstName(sexType);
  const lastName = fakerVI.person.lastName(sexType);
  const email = fakerVI.internet.email({ firstName, lastName });
  const phoneNumber = fakerVI.phone.number();
  const dateOfBirth = fakerVI.date.birthdate().toUTCString();
  const role = fakerVI.helpers.arrayElement([
    "Frontend Developer",
    "Backend Developer",
    "Technical leader",
    "Tester",
    "PM",
  ]);
  const bio = fakerVI.person.bio();
  const division = fakerVI.helpers.arrayElement([
    "HR",
    "ALC",
    "Phoenix",
    "Hades",
    "Warrior",
    "Faderless",
  ]);
  const avtString = fakerVI.image.avatar();

  const randomUser: IUser = {
    _id,
    gender,
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    role,
    bio,
    division,
    avtString,
  };
  return randomUser;
}

export function createMultipleEmployees(number: number) {
  const result = [];
  for (const _ of Array(number)) {
    result.push(createRandomEmployee());
  }
  return result;
}

const MockEmployessListData = createMultipleEmployees(35);

export default MockEmployessListData;
