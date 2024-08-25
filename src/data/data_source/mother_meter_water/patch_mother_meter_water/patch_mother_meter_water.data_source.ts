import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import PatchMotherMeterWaterDataSourceParams from "./interface/patch_mother_meter_water_data_source.params"

export default async function PatchMotherMeterWaterDataSource({ authModel, motherMeterWaterWaterModel }: PatchMotherMeterWaterDataSourceParams): Promise<Failure | void> {
    try {
        console.log(motherMeterWaterWaterModel)
        const sql = `UPDATE ${authModel.accountCode}.mother_meter_water SET 
        serial_number = ?,
        updated_at = CURRENT_TIMESTAMP,
        updated_by = ?
        WHERE id = ${motherMeterWaterWaterModel.id}`
        return await SqlQuery(sql, [motherMeterWaterWaterModel.serialNumber, authModel.userId])
    } catch (error) {
        return FailureMapperUtil(error)
    }
}