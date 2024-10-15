import {ITable} from "./ITable";

export interface IService<T> {
  // Table values would be inserted into
  Table: ITable;

  // Initialize database connection (get instance of DrizzleClient)
  Init: () => Promise<IService<T>>

  // Insert an object of type <T> into the this.Table
  Insert: () => Promise<void>

  // Set object that would be inserted
  SetEntity: (entity: T) => void
}