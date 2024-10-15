import {DrizzleClient} from "../config/DrizzleClient";
import {IService} from "../base/IService";
import {User} from "../models/User";
import {UsersTable} from "../db/UsersTable";

export class UserService implements IService {
  public DatabaseClient: DrizzleClient | undefined;
  public Table: UsersTable;
  public User: User;

  public async Insert() {

    if(this.DatabaseClient && this.DatabaseClient.db) {
      this.Table.ZodInsertSchema.parse(this.User)

      await this.DatabaseClient.db.insert(this.Table.Schema).values(this.User);

    } else {

      throw new Error("Service is not initialized.");

    }
  }

  public async Init(): Promise<UserService> {
    this.DatabaseClient = await DrizzleClient.getInstance()
    return this
  }

  constructor(user: User) {
    this.Table = new UsersTable()
    this.User = user
  }
}