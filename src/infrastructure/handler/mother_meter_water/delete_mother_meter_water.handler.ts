import AuthModel from "../../../data/model/auth/auth.model";
import Failure from "../../../domain/failure/failure";
import DeleteMotherMeterWaterUseCase from "../../../domain/use_case/mother_meter_water/delete_mother_meter_water/delete_mother_meter_water.use_case";
import { plainToInstance } from "class-transformer";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import { Response } from "express";

export default async function DeleteMotherMeterWaterHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {

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

        const response = await DeleteMotherMeterWaterUseCase({ authModel, id });
        
        if (response instanceof Failure) {
            return res.status(400).json(response)
        }

        return res.status(201).json("success");

    } catch (error) {
        return res.status(500).json(error)
    }
}