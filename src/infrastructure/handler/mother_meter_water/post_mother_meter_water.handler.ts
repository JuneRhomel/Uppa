import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import { Response } from "express";
import AuthModel from "../../../data/model/auth/auth.model";
import { plainToInstance } from "class-transformer";
import MotherMeterWaterDto from "../../../application/dto/mother_meter_water.dto";
import MotherMeterWaterEntity from "../../../domain/entity/mother_meter/mother_meter_water.entity";
import PostMotherMeterWaterUseCase from "../../../domain/use_case/mother_meter_water/post_mother_meter_water/post_mother_meter_water.use_case";
import Failure from "../../../domain/failure/failure";

export default async function PostMotherMeterWaterHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body = req.body as MotherMeterWaterDto;


        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token,
        };

        const motherMeterWaterEntity = plainToInstance(
            MotherMeterWaterEntity,
            body,
            {
                excludeExtraneousValues: true,
            }
        );
        console.log(motherMeterWaterEntity)

        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true,
        });


        const response = await PostMotherMeterWaterUseCase({ authModel, motherMeterWaterEntity });
        if (response instanceof Failure) {
            return res.status(400).json(response)
        }
        return res.status(201).json("success");

    } catch (error) {

        return res.status(500).json(error)
    }
}