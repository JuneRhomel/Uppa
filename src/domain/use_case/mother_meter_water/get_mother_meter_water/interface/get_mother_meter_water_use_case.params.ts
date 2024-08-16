import AuthModel from "../../../../../data/model/auth/auth.model";

export default interface GetMotherMeterUseCaseParams {
    authModel: AuthModel,
    id: number
}