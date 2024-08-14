import AuthModel from "../../../../../data/model/auth/auth.model"

export default interface DeleteTenantUseCaseParams {
    authModel: AuthModel
    id: number
}