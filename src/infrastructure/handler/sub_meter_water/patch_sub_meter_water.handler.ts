import { plainToInstance } from "class-transformer";
import { Response } from "express";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import Failure from "../../../domain/failure/failure";
import PatchSubMeterWaterUseCase from "../../../domain/use_case/sub_meter_water/patch_sub_meter_water/patch_sub_meter_water.use_case";
import SubMeterWaterDto from "../../../application/dto/sub_meter_water.dto";
import SubMeterWaterEntity from "../../../domain/entity/sub_meter/sub_meter_water.entity";

export default async function PatchSubMeterWaterHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
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

        const response = await PatchSubMeterWaterUseCase({ authModel, subMeterWaterEntity })

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }

        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}