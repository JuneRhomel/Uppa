import AuthModel from "../../../../model/auth/auth.model";

export default interface GetDataListDataSourceParams {
    authModel: AuthModel;
    table: string;
    search?: string;
    searchBy?: string;
}