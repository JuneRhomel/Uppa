import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import DeleteMotherMeterElectricityDataSourceParams from "./interface/delete_mother_meter_electricity_data_source.params";

export default async function DeleteMotherMeterElectricityDataSource({ authModel, id }: DeleteMotherMeterElectricityDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `DELETE FROM ${authModel.accountCode}.mother_meter_electricity WHERE id = ?`
        return await SqlQuery(sql, [id, authModel.userId])
    } catch (error) {
        return FailureMapperUtil(error)
    }
}