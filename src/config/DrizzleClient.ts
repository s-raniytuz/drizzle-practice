export{}
require('dotenv').config();
import {PgDatabase} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/connect"

export class DrizzleClient {
  static instance: DrizzleClient;
  public db: PgDatabase<any> | undefined;

  private constructor() {}

  public static async getInstance(): Promise<DrizzleClient> {
    if(!DrizzleClient.instance) {
      DrizzleClient.instance = new DrizzleClient();
    }

    if (!DrizzleClient.instance.db) {
      await DrizzleClient.connect()
    }

    return DrizzleClient.instance
  }

  private static async connect() {
    DrizzleClient.instance.db = await drizzle("node-postgres", process.env.DATABASE_URL!)
  }

}

