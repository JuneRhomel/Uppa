import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import TenantModel from "../../../model/tenant/tenant.model";
import GetTenantDataSourceParams from "./interface/get_tenant_data_source.params";
import { plainToInstance } from "class-transformer";

export default async function GetTenantDataSource({ authModel, id }: GetTenantDataSourceParams): Promise<TenantModel | Failure> {
    try {
        const query = `
        SELECT 
            tenant.id AS id,
            tenant.first_name AS first_name,
            tenant.last_name AS last_name,
            tenant.email AS email,
            tenant_status_list.status_name AS status,
            tenant.status_id AS status_id,
            CONCAT(tenant.first_name, ' ', tenant.last_name) AS full_name,
            tenant.contact_number AS contact_number
        FROM ${authModel.accountCode}.tenant AS tenant
        INNER JOIN uppa_core.tenant_status_list AS tenant_status_list
            ON tenant.status_id = tenant_status_list.id
        WHERE tenant.id = ${id} AND tenant.deleted_at IS NULL;`;
    

        const data = await SqlQuery(query);
        return data.pop()
    } catch (error) {
        return FailureMapperUtil(error)
    }
}