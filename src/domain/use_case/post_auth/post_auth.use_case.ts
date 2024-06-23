import PostAuthDataSource from "../../../data/data_source/post_auth/post_auth.data_source";
import ValidationFailure from "../../failure/common/validation";
import PatchAuthUseCaseParams from "./interface/patch_auth_use_case.params";
import Failure from "../../failure/failure";
import JtwToken from "../../../infrastructure/util/jwt/jtw_token.util";
import AuthModel from "../../../data/model/auth/auth.model";


export default async function PostAuthUseCase(params: PatchAuthUseCaseParams): Promise<AuthModel | Failure> {
    try {
        const {
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
        return new Failure("Failed in post user use case", error, 500);
    }

}