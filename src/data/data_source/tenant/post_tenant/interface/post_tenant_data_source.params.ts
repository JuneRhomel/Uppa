import AuthModel from "../../../../model/auth/auth.model";
import TenantModel from "../../../../model/tenant/tenant.model";

export default interface PostTenantDataSource {
    tenantModel: TenantModel
    authModel: AuthModel
}