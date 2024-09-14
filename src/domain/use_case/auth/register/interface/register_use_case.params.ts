import AuthModel from "../../../../../data/model/auth/auth.model";
import RegisterEntity from "../../../../entity/auth/register.entity";

export default interface RegisterUseCaseParams {
    registerEntity: RegisterEntity
    authModel: AuthModel
}