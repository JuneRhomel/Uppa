import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params"
import AuthModel from "../../../data/model/auth/auth.model"
import Failure from "../../../domain/failure/failure"
import DeleteTenantUseCase from "../../../domain/use_case/tenant/delete_tenant/delete_tenant.use_case"
import { plainToInstance } from "class-transformer"
import { Response } from "express"

export default async function DeleteTenantHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const id = parseInt(req.params.id);
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
        const response = await DeleteTenantUseCase({ authModel, id })

        if (response instanceof Failure) {
            return res.status(400).json(response)
        }

        return res.status(200).json("success");
    } catch (error) {
        return res.status(500).json(error);
    }

}