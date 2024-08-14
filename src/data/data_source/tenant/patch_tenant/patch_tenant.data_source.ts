import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import PatchTenantDataSourceParams from "./interface/patch_tenant_data_source.params";

export default async function PatchTenantDataSource({ authModel, tenantModel }: PatchTenantDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `UPDATE ${authModel.accountCode}.tenant SET first_name = ?, last_name = ?, email = ?, contact_number = ?, status_id = ? WHERE id = ?`;

        const params = [
            tenantModel.first_name,
            tenantModel.last_name,
            tenantModel.email,
            tenantModel.contact_number,
            tenantModel.status_id,
            tenantModel.id
        ];
        return await SqlQuery(sql, params)
    } catch (error) {
        return FailureMapperUtil(error)
    }
}