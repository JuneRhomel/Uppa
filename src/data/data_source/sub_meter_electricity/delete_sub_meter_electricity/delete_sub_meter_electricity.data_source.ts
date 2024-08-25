import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import DeleteSubMeterElectricityDataSourceParams from "./interface/delete_sub_meter_electricity_data_source.params"

export default async function DeleteSubMeterElectricityDataSource({ authModel, id }: DeleteSubMeterElectricityDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `UPDATE ${authModel.accountCode}.sub_meter_electricity SET deleted_at = CURRENT_TIMESTAMP, deleted_by = ? WHERE id = ?`
        return await SqlQuery(sql, [authModel.userId, id])
    } catch (error) {
        return FailureMapperUtil(error)
    }
}