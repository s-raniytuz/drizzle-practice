import {PgTableWithColumns} from "drizzle-orm/pg-core/index";
import {ZodObject} from "zod";

export interface ITable {
  Schema: PgTableWithColumns<any>
  ITableInsert: object
  ITableSelect: object
  ZodInsertSchema: ZodObject<any>
  ZodSelectSchema: ZodObject<any>
}