import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import { Response } from "express";
import { plainToInstance } from "class-transformer";
import UnitDto from "../../../application/dto/unit.dto";
import UnitEntity from "../../../domain/entity/unit/unit.entity";
import AuthModel from "../../../data/model/auth/auth.model";
import PatchUnitUseCase from "../../../domain/use_case/unit/patch_unit/patch_unit.use_case";
import Failure from "../../../domain/failure/failure";

export default async function PatchUnitHandler({
  req,
  res,
}: ApiGatewayHelperParams): Promise<Response> {
  try {
    const body = req.body as UnitDto;
    const id = parseInt(req.params.id);
    const unit_type_id = body.unit_type_id;
    const unit_status_id = body.unit_status_id;

    const unitInfo = {
      id,
      unit_name: body.unit_name,
      unit_type_id,
      unit_status_id,
    };
    const authModelInfo = {
      userId: req.userAuth.userId,
      email: req.userAuth.email,
      accountCode: req.userAuth.accountCode,
      token: req.userAuth.token,
    };
    const unitEntity = plainToInstance(UnitEntity, unitInfo, {
      excludeExtraneousValues: true,
    });
    const authModel = plainToInstance(AuthModel, authModelInfo, {
      excludeExtraneousValues: true,
    });

    const response = await PatchUnitUseCase({ unitEntity, authModel });

    if (response instanceof Failure) {
      return res.status(400).json(response);
    }
    return res.status(201).json("success");
  } catch (error) {
    return res.status(500).json(error);
  }
}
