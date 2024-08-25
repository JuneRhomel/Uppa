import { plainToInstance } from "class-transformer";
import { Response } from "express";
import MotherMeterElectricityDto from "../../../application/dto/mother_meter_electricity.dto";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import MotherMeterElectricityEntity from "../../../domain/entity/mother_meter/mother_meter_electricity.entity";
import PatchMotherMeterElectricityListUseCase from "../../../domain/use_case/mother_meter_electricity/patch_mother_meter_electricity/patch_mother_meter_electricity.use_case";


export default async function PatchMotherMeterElectricityHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body = req.body as MotherMeterElectricityDto;
        const id = parseInt(req.params.id);
        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token,
        };
        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true,
        });
        const motherMeterElectricityEntity = plainToInstance(MotherMeterElectricityEntity,
            body,
            {
                excludeExtraneousValues: true,
            }
        );
        const response = await PatchMotherMeterElectricityListUseCase({
            authModel,
            motherMeterElectricityEntity,
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}