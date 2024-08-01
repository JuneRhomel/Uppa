import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import PostTenantDataSource from "./interface/post_tenant_data_source.params";

export default async function PostTenantDataSource({ authModel, tenantModel }: PostTenantDataSource): Promise<Failure | void> {
    try {
        const sql = `INSERT INTO ${authModel.accountCode}.tenant (first_name, last_name, email, contact_number, status_id) value (?, ?, ?, ?, ?)`;
        const params = [
            tenantModel.first_name,
            tenantModel.last_name,
            tenantModel.email,
            tenantModel.contact_number,
            tenantModel.status_id
        ]
        return await SqlQuery(sql, params)

    } catch (error) {
        return FailureMapperUtil(error)
    }


}