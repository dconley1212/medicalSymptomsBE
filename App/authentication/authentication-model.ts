import { db } from "../database/db-config";
interface user {
  username: string;
  password: string;
  phoneNumber: string;
}

export function getUserByID(id: number) {
  return db("users").where("id", id);
}

export function getUserByFilter(filter: string) {
  return db("users").where("username", filter);
}

export async function insertUser(user: user) {
  const [newUser] = await db("users").insert(user);

  return newUser;
}
