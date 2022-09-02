import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (users: Knex.TableBuilder) => {
    users.increments("id").primary();
    users.string("username").notNullable().unique();
    users.string("password").notNullable();
    users.string("phoneNumber").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users");
}
