import AuthModel from "../../../model/auth/auth.model"

export default interface GetDataDataSourceParams {
    authModel: AuthModel;
    id: number | null;
    table: string;
}