import AuthModel from "../../../model/auth/auth.model"

export default interface GetDataDataSourceParams {
    authModel: AuthModel;
    id: number;
    table: string;
}