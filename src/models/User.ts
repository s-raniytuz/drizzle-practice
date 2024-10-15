import {UsersTable} from "../db/UsersTable";

const ITableSelect = new UsersTable().ITableInsert
type IUser = typeof ITableSelect

export class User implements IUser {
  public name: string;
  public email: string;
  public age: number;

  constructor({name, email, age}: IUser) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}
