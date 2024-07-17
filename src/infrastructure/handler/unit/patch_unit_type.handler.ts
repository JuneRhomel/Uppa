import UnitTypeDto from "../../../application/dto/unit_type.dto";
import { Response } from "express";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import UnitTypeEntity from "../../../domain/entity/unit/unit_type.entity";
import Failure from "../../../domain/failure/failure";
import PatchUnitTypeUseCase from "../../../domain/use_case/unit/patch_unit_type/patch_unit_type.use_case";
import { plainToInstance } from "class-transformer";
export default async function PatchUnitTypeHandler({
  req,
  res,
}: ApiGatewayHelperParams): Promise<Response> {
  try {
    const body = req.body as UnitTypeDto;
    const id = parseInt(req.params.id);
    const typeInfo = {
      id,
      unit_type_name: body.unit_type_name,
    };

    const authModelInfo = {
      userId: req.userAuth.userId,
      email: req.userAuth.email,
      accountCode: req.userAuth.accountCode,
      token: req.userAuth.token,
    };
    const authModel = plainToInstance(AuthModel, authModelInfo, {
      excludeExtraneousValues: true,
    });

    const unitTypeEntity = plainToInstance(UnitTypeEntity, typeInfo, {
      excludeExtraneousValues: true,
    });

    const response = await PatchUnitTypeUseCase({ unitTypeEntity, authModel });

    if (response instanceof Failure) {
      return res.status(400).json(response);
    }
    return res.status(201).json("success");
  } catch (error) {
    return res.status(500).json(error);
  }
}
