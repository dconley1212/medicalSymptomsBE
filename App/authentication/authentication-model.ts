import { dbConfig } from "../database/db-config";

interface user {
  username: string;
  password: string;
  phoneNumber: string;
}

export function getUserByID(id: number) {
  return dbConfig("users").where("id", id);
}

export function getUserByFilter(filter: user) {
  return dbConfig("users").where("username", filter.username);
}

export function insertUser(user: user) {
  const newUser = dbConfig("users").insert(user);
  console.log(newUser);
}
