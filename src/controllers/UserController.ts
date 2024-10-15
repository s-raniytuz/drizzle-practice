import {User} from "../models/User";
import {ITable} from "../base/ITable";
import {IService} from "../base/IService";

export class UserController {
  private readonly Table: ITable
  private readonly UserService: IService
  public User: User

  public async InsertUser() {
    this.Table.ZodInsertSchema.parse(this.User)

    await this.UserService.Insert(this.User, this.Table)
  }

  constructor(user: User, table: ITable, service: IService) {
    this.Table = table;
    this.User = user;
    this.UserService = service;
  }
}
