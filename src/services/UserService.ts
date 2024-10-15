import {DrizzleClient} from "../config/DrizzleClient";
import {IService} from "../base/IService";
import {User} from "../models/User";
import {UsersTable} from "../db/UsersTable";

export class UserService implements IService<User> {
  private DatabaseClient: DrizzleClient | undefined;
  private Entity: User;
  public Table: UsersTable;

  public async Insert() {

    if(this.DatabaseClient && this.DatabaseClient.db) {
      this.Table.ZodInsertSchema.parse(this.Entity)

      await this.DatabaseClient.db.insert(this.Table.Schema).values(this.Entity);
      console.log('done')

    } else {

      throw new Error("Service is not initialized. Call Service.Init()");

    }
  }

  public async Init(): Promise<UserService> {
    this.DatabaseClient = await DrizzleClient.getInstance()
    return this
  }

  public SetEntity(entity: User) {
    this.Entity = entity;
  }

  constructor(user: User) {
    this.Table = new UsersTable()
    this.Entity = user
  }
}