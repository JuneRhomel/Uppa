import AuthModel from "../../../../../data/model/auth/auth.model";

export default interface DeleteUnitUseCaseParams {
    id: number;
    authModel: AuthModel;
}