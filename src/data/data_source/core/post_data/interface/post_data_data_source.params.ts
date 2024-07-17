import AuthModel from "../../../../model/auth/auth.model"

export default interface PostDataDataSourceParams {
    authModel: AuthModel
    table: string
    data: any
}