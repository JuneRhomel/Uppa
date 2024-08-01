import { Response } from 'express';
import { plainToInstance } from "class-transformer";
import Failure from '../../../domain/failure/failure';
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from '../../../data/model/auth/auth.model';
import TenantDto from '../../../application/dto/tenant.dto';
import TenantEntity from '../../../domain/entity/tenent/tenant.entity';
import PostTenantUseCase from '../../../domain/use_case/tenant/post_tenant/post_tenant.use_case';


export default async function PostTenantHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
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

        const response = await PostTenantUseCase({ authModel, tenantEntity })

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }

        return res.status(201).json("success");
    } catch (error) {
        return res.status(500).json(error);
    }

}