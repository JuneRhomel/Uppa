import AuthModel from "../../../../model/auth/auth.model"

export default interface DeleteTenantDataSourceParams {
    authModel: AuthModel
    id: number
}