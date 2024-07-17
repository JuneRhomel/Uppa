import UserEntity from "../../../../../domain/entity/user/user.entity";
import AuthModel from "../../../../model/auth/auth.model";

export default interface PostRegisterParams {
    authModel: AuthModel;
    userEntity: UserEntity
}