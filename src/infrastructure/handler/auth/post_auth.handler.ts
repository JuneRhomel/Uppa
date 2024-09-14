import { Response } from 'express';
import UserAuthDto from "../../../application/dto/user_auth.dto";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import Failure from "../../../domain/failure/failure";
import PostAuthUseCase from "../../../domain/use_case/auth/post_auth/post_auth.use_case";
import { plainToInstance } from "class-transformer";
import AuthEntity from '../../../domain/entity/auth/auth.entity';

export default async function PostAuthHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const data = req.body as UserAuthDto;

        const authEntity = plainToInstance(AuthEntity, data, {
            excludeExtraneousValues: true
        });

        const responseAuthUseCase = await PostAuthUseCase(
            { authEntity }
        )


        if (responseAuthUseCase instanceof Failure) {
            return res.status(400).json(responseAuthUseCase);
        }

        return res
            .status(201)
            .json({
                userId: responseAuthUseCase.userId,
                email: responseAuthUseCase.email,
                accountCode: responseAuthUseCase.accountCode,
                token: responseAuthUseCase.token
            });

    } catch (error) {
        return res.status(500).json(error);
    }
}