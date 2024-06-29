import AuthModel from "../../../../../data/model/auth/auth.model";
import UserEntity from "../../../../entity/user.entity";

export default interface PostRegisterParams {
    userEntity: UserEntity,
    authModel: AuthModel
}