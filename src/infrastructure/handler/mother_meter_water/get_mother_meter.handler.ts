import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import { Response } from "express";
import AuthModel from "../../../data/model/auth/auth.model";
import { plainToInstance } from "class-transformer";
import GetMotherMeterUseCase from "../../../domain/use_case/mother_meter_water/get_mother_meter_water/get_mother_meter_water.use_case";
import Failure from "../../../domain/failure/failure";

export default async function GetMotherMeterWaterHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
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


        const response = await GetMotherMeterUseCase({ authModel, id });

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }

        return res.status(201).json(response);
    } catch (error) {

        return res.status(500).json(error)
    }
}