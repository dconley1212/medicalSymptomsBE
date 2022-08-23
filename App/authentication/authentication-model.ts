import { db } from "../database/db-config";

interface user {
  username: string;
  password: string;
  phoneNumber: string;
}

export function getUserByID(id: number) {
  return db("users").where("id", id);
}

export function getUserByFilter(filter: user) {
  return db("users").where("username", filter.username);
}

export function insertUser(user: user) {
  const newUser = db("users").insert(user);
  console.log(newUser);
}
