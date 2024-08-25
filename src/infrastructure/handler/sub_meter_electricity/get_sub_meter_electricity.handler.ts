import { plainToInstance } from "class-transformer";
import { Response } from "express";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import Failure from "../../../domain/failure/failure";
import GetSubMeterElectricityUseCase from "../../../domain/use_case/sub_meter_electricity/get_sub_meter_electricity/get_sub_meter_electricity.use_case";

export default async function GetSubMeterElectricityHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const id = parseInt(req.params.id);
        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token
        }
        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true
        })

        const response = await GetSubMeterElectricityUseCase({ authModel, id })

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}