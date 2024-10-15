import {integer, pgTable, varchar} from "drizzle-orm/pg-core";
import {createInsertSchema, createSelectSchema} from "drizzle-zod";
import {ITable} from "../base/ITable";

export class UsersTable implements ITable {
  public Schema = pgTable("users", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({length: 255}).notNull(),
    age: integer().notNull(),
    email: varchar({length:255}).notNull().unique(),
  })

  public ITableSelect = this.Schema.$inferSelect

  public ITableInsert = this.Schema.$inferInsert

  public ZodInsertSchema = createInsertSchema(this.Schema);

  public ZodSelectSchema = createSelectSchema(this.Schema)

}
