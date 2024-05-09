import { faker } from "@faker-js/faker";
import { inRange } from "lodash";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  role: string;
  division: string;
  bio: string;
}

function createRandomEmployee(): IUser {
  const gender = faker.person.sexType();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName(gender);
  const email = faker.internet.email({ firstName, lastName });
  const phoneNumber = faker.phone.number();
  const dateOfBirth = faker.date.birthdate().toUTCString();
  const role = faker.helpers.arrayElement([
    "Frontend Developer",
    "Backend Developer",
    "Technical leader",
    "Tester",
    "PM",
  ]);
  const bio = faker.person.bio();
  const division = faker.helpers.arrayElement([
    "HR",
    "ALC",
    "Phoenix",
    "Hades",
    "Warrior",
    "Faderless",
  ]);

  const randomUser: IUser = {
    gender,
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    role,
    bio,
    division,
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
