import MotherMeterWaterDto from "../../../application/dto/mother_meter_water.dto";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import MotherMeterWaterEntity from "../../../domain/entity/mother_meter/mother_meter_water.entity";
import Failure from "../../../domain/failure/failure";
import PatchMotherMeterWaterUseCase from "../../../domain/use_case/mother_meter_water/patch_mother_meter_water/patch_mother_meter_water.use_case";
import { plainToInstance } from "class-transformer";
import { Response } from "express";

export default async function PatchMotherMeterWaterHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body = req.body as MotherMeterWaterDto;
        const id = parseInt(req.params.id);
        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token,
        };

        const motherMeterWaterWaterEntity = plainToInstance(
            MotherMeterWaterEntity,
            body,
            {
                excludeExtraneousValues: true,
            }
        );
        motherMeterWaterWaterEntity.id = id;
        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true,
        });

        const response = await PatchMotherMeterWaterUseCase({ authModel, motherMeterWaterWaterEntity });

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }

        return res.status(201).json("success");

    } catch (error) {

        return res.status(500).json(error)
    }
}