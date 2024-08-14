import Failure from "../../../../domain/failure/failure"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import SqlQuery from "../../../../sql/database_pool.sql"
import TenantModel from "../../../model/tenant/tenant.model"
import DeleteTenantDataSourceParams from "./interface/delete_tenant_data_source.params"

export default async function DeleteTenantDataSource({ authModel, id }: DeleteTenantDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `DELETE FROM ${authModel.accountCode}.tenant WHERE id = ${id}`
        return await SqlQuery(sql);
    } catch (error) {
        return FailureMapperUtil(error)
    }
}