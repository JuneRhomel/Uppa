import AuthModel from "../../../../../data/model/auth/auth.model";

export default interface GetUnitUseCaseParams {
    id: number;
    authModel: AuthModel
}