import AuthModel from "../../../../model/auth/auth.model";
import RegisterModel from "../../../../model/auth/register.model";

export default interface RegisterDataSourceParams {
    registerModel: RegisterModel,
    authModel: AuthModel
}