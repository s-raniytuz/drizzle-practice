import {ITable} from "./ITable";

export interface IService {
  Table: ITable;
  Init: () => Promise<IService>
  Insert: (model: any, table: ITable) => Promise<void>
}