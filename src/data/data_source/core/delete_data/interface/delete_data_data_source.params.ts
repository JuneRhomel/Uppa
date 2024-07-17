import AuthModel from "../../../../model/auth/auth.model"

export default interface DeleteDataDataSourceParams {
    authModel: AuthModel;
    table: string,
    id: number
}