import PostAuthDataSource from "../../../../data/data_source/auth/post_auth/post_auth.data_source";
import PatchAuthUseCaseParams from "./interface/patch_auth_use_case.params";
import Failure from "../../../failure/failure";
import JtwToken from "../../../../infrastructure/util/jwt/jtw_token.util";
import AuthModel from "../../../../data/model/auth/auth.model";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";


export default async function PostAuthUseCase(params: PatchAuthUseCaseParams): Promise<AuthModel | Failure> {
    try {
        let {
            email,
            password,
            accountCode
        } = params

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