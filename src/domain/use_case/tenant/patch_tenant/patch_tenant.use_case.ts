import PatchTenantDataSource from "../../../../data/data_source/tenant/patch_tenant/patch_tenant.data_source";
import TenantModel from "../../../../data/model/tenant/tenant.model";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../../failure/failure";
import { plainToInstance } from "class-transformer";
import PatchTenantUseCaseParams from "./interface/patch_tenant_use_case.params";

export default async function PatchTenantUseCase({
    tenantEntity,
    authModel,
}: PatchTenantUseCaseParams): Promise<Failure | void> {
    try {
        const tenantModel = plainToInstance(TenantModel, tenantEntity, {
            excludeExtraneousValues: true,
        })
        return await PatchTenantDataSource({
            tenantModel,
            authModel,
        });
    } catch (error) {
        return FailureMapperUtil(error);
    }
}