import PostAuthDataSource from "../../../data/data_source/post_auth/post_auth.data_source";
import ValidationFailure from "../../failure/common/validation";
import PatchAuthUseCaseParams from "./interface/patch_auth_use_case.params";

export default async function PostAuthUseCase(params: PatchAuthUseCaseParams): Promise<any> {
    try {
        const {
            email,
            password,
            confirmPassword,
            accountCode
        } = params

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
    } catch (error) {

    }

}