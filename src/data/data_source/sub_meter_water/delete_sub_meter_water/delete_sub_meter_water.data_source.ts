import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import DeleteSubMeterWaterDataSourceParams from "./interface/delete_sub_meter_water_data_source.params"

export default async function DeleteSubMeterWaterDataSource({ authModel, id }: DeleteSubMeterWaterDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `UPDATE ${authModel.accountCode}.sub_meter_water SET deleted_at = CURRENT_TIMESTAMP, deleted_by = ? WHERE id = ?`
        return await SqlQuery(sql, [authModel.userId, id])
    } catch (error) {
        return FailureMapperUtil(error)
    }
}