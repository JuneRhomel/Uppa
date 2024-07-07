import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import { plainToInstance } from "class-transformer";
import { Response } from "express";
import AuthModel from "../../../data/model/auth/auth.model";
import GetUnitStatusUseCase from "../../../domain/use_case/unit/get_unit_status/get_unit_status.use_case";

export default async function GetUnitStatusHandler({
  req,
  res,
}: ApiGatewayHelperParams): Promise<Response> {
  try {
    const authModelInfo = {
      userId: req.userAuth.userId,
      email: req.userAuth.email,
      accountCode: req.userAuth.accountCode,
      token: req.userAuth.token,
    };
    const authModel = plainToInstance(AuthModel, authModelInfo, {
      excludeExtraneousValues: true,
    });

    const result = await GetUnitStatusUseCase({
      authModel
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
}
