import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import PatchSubMeterElectricityDataSourceParams from "./interface/patch_sub_meter_electricity_data_source.params"

export default async function PatchSubMeterElectricityDataSource({ authModel, subMeterElectricityModel }: PatchSubMeterElectricityDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `
        UPDATE ${authModel.accountCode}.sub_meter_electricity
        SET 
        serial_number = ?, 
        unit_id = ?, 
        mother_meter_id = ?, 
        updated_at = CURRENT_TIMESTAMP, 
        updated_by = ? 
            WHERE 
        id = ?`

        return await SqlQuery(sql, [
            subMeterElectricityModel.serialNumber,
            subMeterElectricityModel.unitId,
            subMeterElectricityModel.motherMeterId,
            authModel.userId,
            subMeterElectricityModel.id
        ])

    } catch (error) {

        return FailureMapperUtil(error)
    }
}