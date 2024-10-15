import {IService} from "./base/IService";

require('dotenv').config();
import {User} from "./models/User";
import {UserService} from "./services/UserService";

// import {drizzle} from "drizzle-orm/connect";
// import {integer, pgTable, varchar} from "drizzle-orm/pg-core";

const user = new User({
  name: "Vadim15",
  age: 21,
  email: "saranin20417@example.com"
})

async function main() {
  // const Schema = pgTable("users", {
  //   id: integer().primaryKey().generatedByDefaultAsIdentity(),
  //   name: varchar({length: 255}).notNull(),
  //   age: integer().notNull(),
  //   email: varchar({length:255}).notNull().unique(),
  // })
  // console.log('Schema created')
  // const db = await drizzle("node-postgres","postgres://postgres:password@localhost:5432/drizzle-test-db")
  // console.log('Connected')
  // await db.insert(Schema).values({
  //   name: "Vadim13",
  //   age: 21,
  //   email: "saranin20413@example.com"
  // })
  // console.log('Done')
  try {
    const Service = await new UserService(user).Init();

    await Service.Insert()

  } catch (error) {
    if(error instanceof Error) {
      console.log(error.message)
    }
  }
}

main()