import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import { Response } from "express";
import { plainToInstance } from "class-transformer";
import GetTenantUseCase from "../../../domain/use_case/tenant/get_tenant/get_tenant.use_case";
export default async function GetTenantHandler({ req,
    res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const id = parseInt(req.params.id);

        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token
        }
        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true
        })

        const result = await GetTenantUseCase({ authModel, id })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json(error)
    }
}