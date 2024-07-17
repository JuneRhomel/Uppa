import AuthModel from "../../../../model/auth/auth.model"

export default interface PatchDataDataSourceParams {
    authModel: AuthModel
    table: string
    data: any,
}