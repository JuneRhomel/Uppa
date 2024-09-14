import PostAuthDataSource from "../../../../data/data_source/auth/post_auth/post_auth.data_source";
import PatchAuthUseCaseParams from "./interface/patch_auth_use_case.params";
import Failure from "../../../failure/failure";
import JtwToken from "../../../../infrastructure/util/jwt/jtw_token.util";
import AuthModel from "../../../../data/model/auth/auth.model";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import { validate } from "class-validator";
import ValidationFailure from "../../../failure/common/validation";
const md5 = require('md5');

export default async function PostAuthUseCase({ authEntity }: PatchAuthUseCaseParams): Promise<AuthModel | Failure> {
    try {
        const validationError = await validate(authEntity)

        if (validationError.length > 0) {
            return new ValidationFailure({ extra: validationError })
        }
        
        authEntity.password = md5(authEntity.password)

        const { email, password, accountCode } = authEntity

        const responseAuth = await PostAuthDataSource({
            email,
            password,
            accountCode
        })

        if (responseAuth instanceof Failure) {
            return responseAuth
        }

        const jwtResponse = await JtwToken({
            userId: responseAuth.id,
            email: responseAuth.email,
            accountCode: responseAuth.accountCode
        }) as string

        return new AuthModel(
            responseAuth.id,
            responseAuth.email,
            responseAuth.accountCode,
            jwtResponse
        )


    } catch (error) {
        return FailureMapperUtil(error);
    }

}