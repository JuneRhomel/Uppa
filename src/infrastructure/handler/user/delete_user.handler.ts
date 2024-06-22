import { Response } from 'express';
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import Failure from "../../../domain/failure/failure";
import DeleteUserUseCase from "../../../domain/use_case/delete_user/delete_user.use_case";

export default async function DeleteUserHadler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const id = parseInt(req.params.id);
        const response = DeleteUserUseCase({ id });
        if (response instanceof Failure) {
            return res.status(response.statusCode).json({ error: response.message });
        }
        return res.status(201).json(response);

    } catch (error) {
        return res.status(500).json(error);
    }
}