import UnitStatusDto from "../../../application/dto/unit_status.dto";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import { Response } from "express";
import AuthModel from "../../../data/model/auth/auth.model"
import PatchUnitStatusUseCase from "../../../domain/use_case/unit/patch_unit_status/patch_unit_status.use_case";
import { plainToInstance } from "class-transformer";
import Failure from "../../../domain/failure/failure";
import UnitStatusEntity from "../../../domain/entity/unit/unit_status.entity";

export default async function PatchUnitStatusHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body = req.body as UnitStatusDto;
        const id = parseInt(req.params.id);
        const statusInfo = {
            id,
            unit_status_name: body.unit_status_name
        }

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

        const unitStatusEntity = plainToInstance(
            UnitStatusEntity,
            statusInfo,
            {
                excludeExtraneousValues: true,
            }
        )

        const response = await PatchUnitStatusUseCase({ unitStatusEntity, authModel })

        if (response instanceof Failure) {
            return res.status(400).json(response);
        }
        return res.status(201).json("success");
    } catch (error) {
        return res.status(500).json(error);
    }
}