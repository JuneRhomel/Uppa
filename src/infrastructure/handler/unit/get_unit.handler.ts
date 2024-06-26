import { Response } from 'express';
import { plainToInstance } from "class-transformer";

import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from '../../../data/model/auth/auth.model';
import GetUnitUseCase from '../../../domain/use_case/unit/get_unit/get_unit.use_case';
import Failure from '../../../domain/failure/failure';

export default async function GetUnitHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const id = parseInt(req.params.id);
        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token
        }
        const authModel = plainToInstance(
            AuthModel,
            authModelInfo,
            {
                excludeExtraneousValues: true,
            }
        )

        const response = await GetUnitUseCase({ id, authModel })

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}