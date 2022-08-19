import { dbConfig } from "../database/db-config";

function getUserByID(id: number) {
  return dbConfig("users").where("id", id);
}

function getUserBy(filter: string) {
  return dbConfig("users").where(filter);
}
