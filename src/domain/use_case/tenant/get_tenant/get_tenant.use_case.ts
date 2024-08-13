import GetTenantDataSource from "../../../../data/data_source/tenant/get_tenant/get_tenant.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import TenantEntity from "../../../entity/tenent/tenant.entity"
import Failure from "../../../failure/failure"
import GetTenantUseCaseParams from "./interface/get_tenant_use_case.params"
import { plainToInstance } from "class-transformer";

export default async function GetTenantUseCase({ authModel, id }: GetTenantUseCaseParams): Promise<Failure | TenantEntity> {
    try {
        const response = await GetTenantDataSource({ authModel, id })

        console.log(response)

        if (response instanceof Failure) {
            return response
        }

        const tenant = plainToInstance(TenantEntity, response, {
            excludeExtraneousValues: true
        })

        return tenant
    } catch (error) {
        return FailureMapperUtil(error)
    }
}