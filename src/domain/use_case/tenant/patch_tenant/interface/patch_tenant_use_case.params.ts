import AuthModel from "../../../../../data/model/auth/auth.model"
import TenantEntity from "../../../../entity/tenent/tenant.entity"

export default interface PatchTenantUseCaseParams {
    authModel: AuthModel
    tenantEntity: TenantEntity
}