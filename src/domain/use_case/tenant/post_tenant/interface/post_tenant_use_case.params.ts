import AuthModel from "../../../../../data/model/auth/auth.model";
import TenantEntity from "../../../../entity/tenent/tenant.entity";

export default interface PostTenantUseCaseParams {
    authModel: AuthModel
    tenantEntity: TenantEntity
}