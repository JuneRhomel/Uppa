import { Expose } from "class-transformer";
import UnitEntity from "./unit.entity";

export default class GetUnitListEntity {
  @Expose()
  public properties: UnitEntity[];

  @Expose()
  public totalRows: number;

  constructor(properties: UnitEntity[], totalRows: number) {
    this.properties = properties;
    this.totalRows = totalRows;
  }
}
