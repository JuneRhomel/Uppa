import PostAuthDataSource from "../../../data/data_source/post_auth/post_auth.data_source";
import ValidationFailure from "../../failure/common/validation";
import PatchAuthUseCaseParams from "./interface/patch_auth_use_case.params";
import Failure from "../../failure/failure";
import JtwToken from "../../../infrastructure/util/jwt/jtw_token.util";
import AuthModel from "../../../data/model/user_models/auth.model";


export default async function PostAuthUseCase(params: PatchAuthUseCaseParams): Promise<AuthModel | Failure | ValidationFailure> {
    try {
        const {
            email,
            password,
            confirmPassword,
            accountCode
        } = params
        // Add UserAuth Entity

        if (password !== confirmPassword) {
            return new ValidationFailure({
                message: "Passwords do not match",
                code: 1000,
            },
                400
            )
        }
        if (password.length < 8) {
            return new ValidationFailure({
                message: "Password should be at least 8 characters",
                code: 1001
            },
                400
            )
        }


        const responseAuth = await PostAuthDataSource({
            email,
            accountCode
        })
        if (responseAuth instanceof Failure) {
            return new Failure("Failed in post user use case", "Error", 500);
        }

        const jwt = await JtwToken({
            userId: responseAuth.id,
            email: responseAuth.email,
            accountCode: responseAuth.account_code

        })

        return jwt

    } catch (error) {
        return new Failure("Failed in post user use case", error, 500);
    }

}