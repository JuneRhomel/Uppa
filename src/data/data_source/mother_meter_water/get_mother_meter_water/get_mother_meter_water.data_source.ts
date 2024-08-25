import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import MotherMeterElectricityModel from "../../../model/mother_meter/mother_meter_electricity.model"
import GetMotherMeterDataSourceParams from "./interface/get_mother_meter_water_data_source"
import { plainToInstance } from "class-transformer"

export default async function GetMotherMeterDataSource({ authModel, id }: GetMotherMeterDataSourceParams): Promise<Failure | MotherMeterElectricityModel> {
    try {
        const sql = `SELECT * FROM ${authModel.accountCode}.mother_meter_water WHERE id = ${id} AND deleted_at IS NULL;`
        const data = await SqlQuery(sql)
        return plainToInstance(MotherMeterElectricityModel, data[0] as object, { excludeExtraneousValues: true })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}