import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import TenantModel from "../../../model/tenant/tenant.model";
import GetTenantListDataSourceParams from "./interface/get_tenant_list_data_source.params";

export default async function GetTenantListDataSource({ authModel, paginationModel }: GetTenantListDataSourceParams): Promise<TenantModel[] | Failure> {
    try {
        const { search, filters, page, numberOfRows, columns, sortBy, sortOrder } = paginationModel;
        const { accountCode } = authModel;

        // Modify searchColumns to include a condition for full name
        const searchColumns = columns
            .map((column) => {
                if (column === 'full_name') {
                    return `CONCAT(tenant.first_name, ' ', tenant.last_name) LIKE '%${search}%'`;
                } else {
                    return `${column} LIKE '%${search}%'`;
                }
            })
            .join(" OR ");

        const sortOrderCondition = `ORDER BY ${sortBy} ${sortOrder}`;

        const validFilters = filters.filter((filter) => !filter.includes("All"));

        let filterConditions = "";
        if (validFilters.length > 0) {
            filterConditions = `AND ${validFilters.map((filter) => `${filter}`).join(" AND ")}`;
        }

        const query = `
           SELECT 
                tenant.id as id,
                tenant.first_name as first_name,
                tenant.last_name as last_name,
                tenant.email as email,
                tenant_status_list.status_name as status,
                tenant.status_id as status_id,
                CONCAT(tenant.first_name, ' ', tenant.last_name) as full_name,
                tenant.contact_number as contact_number,
                tenant.created_at as created_at,
                tenant.updated_at as updated_at,
                tenant.deleted_at as deleted_at,
                tenant.created_by as created_by,
                tenant.updated_by as updated_by,
                tenant.deleted_by as deleted_by
            FROM ${accountCode}.tenant
            INNER JOIN uppa_core.tenant_status_list
                ON tenant.status_id = tenant_status_list.id
            WHERE tenant.deleted_at IS NULL
            ${filterConditions ? `${filterConditions}` : ""}
            ${search ? `AND (${searchColumns})` : ""}
            ${sortBy && sortOrder ? `${sortOrderCondition}` : ""}
            LIMIT ${numberOfRows} OFFSET ${(page - 1) * numberOfRows};
        `;
        return await SqlQuery(query);

    } catch (error) {
        return FailureMapperUtil(error);
    }
}