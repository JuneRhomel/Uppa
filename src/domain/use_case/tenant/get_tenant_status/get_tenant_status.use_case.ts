import GetDataDataSource from "../../../../data/data_source/core/get_data/get_data.data_source"
import GetTenantStatusDataSource from "../../../../data/data_source/tenant/get_tenant_status/get_tenant_status.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import TenantStatusEntity from "../../../entity/tenent/tenant_status.entity"
import Failure from "../../../failure/failure"
import GetTenantStatusUseCaseParams from "./interface/get_tenant_status_use_case.params"

export default async function GetTenantStatusUseCase({ authModel }: GetTenantStatusUseCaseParams): Promise<Failure | TenantStatusEntity[]> {
    try {
        return await GetTenantStatusDataSource({ authModel })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}