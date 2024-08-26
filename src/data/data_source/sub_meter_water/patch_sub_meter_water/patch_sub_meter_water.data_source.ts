import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import PatchSubMeterWaterDataSourceParams from "./interface/patch_sub_meter_water_data_source"

export default async function PatchSubMeterWaterDataSource({ authModel, subMeterWaterModel }: PatchSubMeterWaterDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `
        UPDATE ${authModel.accountCode}.sub_meter_water 
            SET 
        serial_number = ?, 
        unit_id = ?, 
        mother_meter_id = ?,
        updated_at = CURRENT_TIMESTAMP,
        updated_by = ?
        WHERE id = ?`

        return await SqlQuery(sql, [
            subMeterWaterModel.serialNumber,
            subMeterWaterModel.unitId,
            subMeterWaterModel.motherMeterId,
            authModel.userId,
            subMeterWaterModel.id
        ])
    } catch (error) {
        return FailureMapperUtil(error)
    }
}