import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import PostSubMeterWaterDataSourceParams from "./interface/post_sub_meter_water_data_source.params"

export default async function PostSubMetreWaterDataSource({ authModel, subMeterWaterModel }: PostSubMeterWaterDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `
        INSERT INTO ${authModel.accountCode}.sub_meter_water 
        (serial_number, unit_id, mother_meter_id, created_at, created_by) 
        VALUES 
        (?, ?, ?, CURRENT_TIMESTAMP, ?);`
        return await SqlQuery(sql, [
            subMeterWaterModel.serialNumber,
            subMeterWaterModel.unitId,
            subMeterWaterModel.motherMeterId,
            authModel.userId
        ])
    } catch (error) {
        return FailureMapperUtil(error)
    }
}