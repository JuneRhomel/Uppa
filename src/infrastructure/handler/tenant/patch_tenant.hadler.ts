import { Response } from "express";
import TenantDto from "../../../application/dto/tenant.dto";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import TenantEntity from "../../../domain/entity/tenent/tenant.entity";
import Failure from "../../../domain/failure/failure";
import PatchTenantUseCase from "../../../domain/use_case/tenant/patch_tenant/patch_tenant.use_case";
import { plainToInstance } from "class-transformer";

export default async function PatchTenantHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const tenantId = parseInt(req.params.id);
        const body = req.body as TenantDto;
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
        const tenantEntity = plainToInstance(
            TenantEntity,
            body,
            {
                excludeExtraneousValues: true,
            }
        )

        tenantEntity.id = tenantId
        const response = await PatchTenantUseCase({ authModel, tenantEntity })
        if (response instanceof Failure) {
            return res.status(400).json(response)
        }
        return res.status(201).json("success");
    } catch (error) {
        return res.status(500).json("error");
    }
}
