import { plainToInstance } from "class-transformer";
import { Response } from "express";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import SubMeterElectricityEntity from "../../../domain/entity/sub_meter/sub_meter_electricity.entity";
import Failure from "../../../domain/failure/failure";
import PostSubMeterElectricityUseCase from "../../../domain/use_case/sub_meter_electricity/post_sub_meter_electricity/post_sub_meter_electricity.use_case";
import SubMeterElectricityDto from "../../../application/dto/sub_meter_electricity.dto";

export default async function PostSubMeterElectricityHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body = req.body as SubMeterElectricityDto;
        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token
        }
        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true
        })

        const subMeterElectricityEntity = plainToInstance(SubMeterElectricityEntity, body, {
            excludeExtraneousValues: true
        })

        const response = await PostSubMeterElectricityUseCase({ authModel, subMeterElectricityEntity })

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }

        return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json(error)
    }
}
