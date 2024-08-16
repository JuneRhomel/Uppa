import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import DeleteMotherMeterWaterDataSourceParams from "./interface/delete_moter_meter_water_data_source.params"

export default async function DeleteMotherMeterWaterDataSource({ authModel, id }: DeleteMotherMeterWaterDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `DELETE FROM ${authModel.accountCode}.mother_meter_water WHERE id = ?`
        return await SqlQuery(sql, [id, authModel.userId])
    } catch (error) {
        return FailureMapperUtil(error)
    }
}