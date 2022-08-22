import { dbConfig } from "../database/db-config";

export function getUserByID(id: number) {
  return dbConfig("users").where("id", id);
}

export function getUserByFilter(filter: string) {
  return dbConfig("users").where(filter);
}
