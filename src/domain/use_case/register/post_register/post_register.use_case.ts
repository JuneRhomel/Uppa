import PostRegisterParams from "./interface/post_register_use_case.params";
import Failure from "../../../failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import { validate } from "class-validator";
import ValidationFailure from "../../../failure/common/validation";
import PasswordMatchFailure from "../../../failure/register/password_match.failuer";
import PostRegisterDataSource from "../../../../data/data_source/post_register/post_register.use_case";

const md5 = require('md5');


export default async function PostRegisterUseCase({ userEntity, authModel }: PostRegisterParams): Promise<void | Failure> {
    try {
        const userInfoValidation = await validate(
            userEntity
        )
        if (userInfoValidation.length > 0) {
            return new ValidationFailure({ extra: userInfoValidation });
        }

        if (userEntity.password !== userEntity.confirmPassword) {
            return new PasswordMatchFailure()
        }

        userEntity.createdAt = new Date().toISOString()
        //  Conveert the password to md5 
        userEntity.password = md5(userEntity.password)

        const response = await PostRegisterDataSource({
            authModel,
            userEntity
        })
        return response


    } catch (error) {
        FailureMapperUtil(error)
    }
}