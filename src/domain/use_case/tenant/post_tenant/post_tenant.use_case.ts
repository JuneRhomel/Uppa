import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import PostTenantUseCaseParams from "./interface/post_tenant_use_case.params";
import ValidationFailure from "../../../failure/common/validation";
import PostTenantDataSource from "../../../../data/data_source/tenant/post_tenant/post_tenant.data_source";
import TenantModel from "../../../../data/model/tenant/tenant.model";

export default async function PostTenantUseCase({ authModel, tenantEntity }: PostTenantUseCaseParams) {
    try {
        tenantEntity.status_id = 2
        const errorValidation = await validate(tenantEntity)

        if (errorValidation.length > 0) {
            return new ValidationFailure({ extra: errorValidation });
        }
        const tenantModel = plainToInstance(TenantModel,
            tenantEntity, {
            excludeExtraneousValues: true
        }
        )
        return await PostTenantDataSource({ authModel, tenantModel })

    } catch (error) {
        return FailureMapperUtil(error)
    }

}