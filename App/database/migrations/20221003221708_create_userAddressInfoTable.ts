import { Knex } from "knex";
// encountered a error with the foreign key designation so I am going to need to start
// on this tomorrow

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    "userAddressInfo",
    (userAddressInfo: Knex.TableBuilder) => {
      userAddressInfo.increments("userAddress_id");
      userAddressInfo.string("username").notNullable().unique();
      userAddressInfo.string("phone").notNullable();
      userAddressInfo.string("firstName").notNullable();
      userAddressInfo.string("lastName").notNullable();
      userAddressInfo.string("address").notNullable();
      userAddressInfo.string("apartment_suite_etc").nullable();
      userAddressInfo.string("city").notNullable();
      userAddressInfo.string("state").notNullable();
      userAddressInfo.string("zipcode").notNullable();
      userAddressInfo.integer("user_id").notNullable();
      userAddressInfo.foreign("user_id").references("id").inTable("users");
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("userAddresInfo");
}
