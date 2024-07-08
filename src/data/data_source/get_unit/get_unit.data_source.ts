import { plainToInstance } from "class-transformer";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import UnitModel from "../../model/unit/unit.model";
import GetUnitDataSourceParams from "./interface/get_unit_data_source.params";
import Failure from "../../../domain/failure/failure";
export default async function GetUnitDataSource({
  id,
  authModel,
}: GetUnitDataSourceParams): Promise<UnitModel | Failure> {
  try {
    const query = `
    SELECT 
        unit.id as id,
        unit.unit_name as unit_name,
        unit.unit_type_id as unit_type_id,
        list_unit_type.unit_type_name as unit_type_name,
        unit.unit_status_id as unit_status_id,
        list_unit_status.unit_status_name as unit_status_name,
        unit.created_at as created_at,
        unit.updated_at as updated_at,
        unit.deleted_at as deleted_at,
        unit.created_by as created_by,
        unit.deleted_by as deleted_by,
        unit.updated_by as updated_by
    FROM ${authModel.accountCode}.unit
        INNER JOIN ${authModel.accountCode}.list_unit_status 
        ON unit.unit_status_id = list_unit_status.id
        INNER JOIN ${authModel.accountCode}.list_unit_type 
        ON unit.unit_type_id = list_unit_type.id
    WHERE unit.id = ${id} AND unit.deleted_at IS NULL;`;

    const data = await SqlQuery(query);

    return data.pop()
    
  } catch (error) {
    return FailureMapperUtil(error);
  }
}
