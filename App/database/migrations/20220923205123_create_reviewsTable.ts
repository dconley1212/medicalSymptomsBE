import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("reviews", (reviews: Knex.TableBuilder) => {
    reviews.increments("review_id");
    reviews.string("reviewerName").notNullable();
    reviews.string("itemName").notNullable();
    reviews.integer("rating").notNullable();
    reviews.string("comments").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("reviews");
}
