import {ITable} from "./ITable";

export interface IService {
  Table: ITable;
  Init: () => Promise<IService>
  Insert: () => Promise<void>
}