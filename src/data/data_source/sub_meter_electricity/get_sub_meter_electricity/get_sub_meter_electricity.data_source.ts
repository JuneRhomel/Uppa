import { plainToInstance } from "class-transformer"
import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import SubMeterElectricityModel from "../../../model/sub_meter/sub_meter_electricity.model"
import GetSubMeterElectricityDataSourceParams from "./interface/get_sub_meter_electricity_data_source.params"

export default async function GetSubMeterElectricityDataSource({ authModel, id }: GetSubMeterElectricityDataSourceParams): Promise<Failure | SubMeterElectricityModel> {
    try {

        const sql = `
        SELECT 
            sub_meter_electricity.id,
            sub_meter_electricity.serial_number,
            sub_meter_electricity.created_at,
            sub_meter_electricity.unit_id,
            sub_meter_electricity.mother_meter_id,
            unit.unit_name,
            mother_meter_electricity.serial_number as mother_meter_serial_number
        FROM ${authModel.accountCode}.sub_meter_electricity 
            INNER JOIN ${authModel.accountCode}.unit ON sub_meter_electricity.unit_id = unit.id
            INNER JOIN ${authModel.accountCode}.mother_meter_electricity ON sub_meter_electricity.mother_meter_id = mother_meter_electricity.id
        WHERE id = ? 
        AND deleted_at IS NULL`;

        const data = await SqlQuery(sql, [id])

        return plainToInstance(SubMeterElectricityModel, data[0] as object, { excludeExtraneousValues: true })

    } catch (error) {
        return FailureMapperUtil(error)
    }
}