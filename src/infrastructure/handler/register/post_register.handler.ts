import UserDto from "../../../application/dto/user.dto";
import { plainToInstance } from "class-transformer";

import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import { Response } from 'express';
import UserEntity from "../../../domain/entity/user/user.entity";
import AuthModel from "../../../data/model/auth/auth.model";
import PostRegisterUseCase from "../../../domain/use_case/register/post_register/post_register.use_case";
import Failure from "../../../domain/failure/failure";

export default async function PostRegisterHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body = req.body as UserDto
        const userInfo = {
            firstname: body.firstname,
            lasname: body.lastname,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword
        }

        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token
        }


        const userEntity = plainToInstance(
            UserEntity,
            userInfo, {
            excludeExtraneousValues: true,
        }
        )
        const authModel = plainToInstance(
            AuthModel,
            authModelInfo,
            {
                excludeExtraneousValues: true,
            }
        )

        const response = await PostRegisterUseCase({
            userEntity, authModel
        })

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }
        
        return res.status(201).json(response);

    } catch (error) {
        
        return res.status(500).json(error);
    }
}