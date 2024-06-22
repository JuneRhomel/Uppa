import UserAuthDto from "../../../application/dto/user_auth.dto";
import { Response } from 'express';
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import Failure from "../../../domain/failure/failure";
import PostAuthUseCase from "../../../domain/use_case/post_auth/post_auth.use_case";

export default async function PostAuthHandler({ req, res }: ApiGatewayHelperParams): Promise<Failure | void | Response> {
    try {
        const {
            email,
            password,
            confirmPassword,
            accountCode
        } = req.body as UserAuthDto;

        const response = await PostAuthUseCase({
            email,
            password,
            confirmPassword,
            accountCode
        })


        if (response instanceof Failure) {
            return res.status(response.statusCode).json({ error: response.message });
        }


    } catch (error) {
        return res.status(500).json(error);
    }
}