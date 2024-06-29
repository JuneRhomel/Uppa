import UserEntity from "../../../../domain/entity/user.entity";
import AuthModel from "../../../model/auth/auth.model";

export default interface PostRegisterParams {
    authModel: AuthModel;
    userEntity: UserEntity
}