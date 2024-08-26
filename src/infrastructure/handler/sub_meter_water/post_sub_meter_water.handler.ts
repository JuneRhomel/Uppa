import { plainToInstance } from "class-transformer";
import { Response } from "express";
import SubMeterWaterDto from "../../../application/dto/sub_meter_water.dto";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import SubMeterWaterEntity from "../../../domain/entity/sub_meter/sub_meter_water.entity";
import Failure from "../../../domain/failure/failure";
import PostSubMeterWaterUseCase from "../../../domain/use_case/sub_meter_water/post_sub_meter_water/post_sub_meter_water.use_case";

export default async function PostSubMeterWaterHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body = req.body as SubMeterWaterDto;

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

        const subMeterWaterEntity = plainToInstance(
            SubMeterWaterEntity,
            body,
            {
                excludeExtraneousValues: true,
            }
        )

        const response = await PostSubMeterWaterUseCase({ authModel, subMeterWaterEntity })

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }

        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}