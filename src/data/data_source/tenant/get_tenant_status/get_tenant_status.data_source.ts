import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import TenantStatusModel from "../../../model/tenant/tenant_status.model";
import GetTenantStatusDataSourceParams from "./interface/get_tenant_status_data_source.params";
import { plainToInstance } from "class-transformer";

export default async function GetTenantStatusDataSource({ authModel }: GetTenantStatusDataSourceParams): Promise<TenantStatusModel[] | Failure> {
    try {

        const query = `
            SELECT 
                id,
                status_name
            FROM uppa_core.tenant_status_list
        `;

        const queryResult = await SqlQuery(query);

        const tenantStatusModels = plainToInstance(TenantStatusModel, queryResult);
        return tenantStatusModels;

    } catch (error) {
        return FailureMapperUtil(error)
    }
}