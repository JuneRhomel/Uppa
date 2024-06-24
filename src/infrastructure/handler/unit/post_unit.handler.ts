import { Response } from 'express';
import { plainToInstance } from "class-transformer";

import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import UnitDto from '../../../application/dto/unit.dto';
import UnitEntity from '../../../domain/entity/unit.entity';
import AuthModel from '../../../data/model/auth/auth.model';
import PostUnitUseCase from '../../../domain/use_case/post_unit/post_unit.use_case';
import Failure from '../../../domain/failure/failure';

export default async function PostUnitHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body = req.body as UnitDto;
        const unitInfo = {
            unit_name: body.unit_name,
            unit_type_id: body.unit_type_id,
            unit_status_id: body.unit_type_id
        }
        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token
        }
        const unitEntity = plainToInstance(
            UnitEntity,
            unitInfo, {
            excludeExtraneousValues: true,
        }
        )
        const authModel = plainToInstance(
            AuthModel,
            authModelInfo,
            {
                excludeExtraneousValues: true,
            }
        )

        const response = await PostUnitUseCase({ unitEntity, authModel })

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }

}