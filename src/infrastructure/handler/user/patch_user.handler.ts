import { Response } from 'express';
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import Failure from "../../../domain/failure/failure";
import PatchUserUseCase from '../../../domain/use_case/patch_user/patch_user.use_case';

export default async function PatchUserHandler({ req, res }: ApiGatewayHelperParams): Promise<void | Response> {
    try {
        const id = parseInt(req.params.id);
        const { firstname, lastname, email, is_active } = req.body;
        if (!id) {
            return res.status(400).json({ error: 'Missing id parameter' });
        }

        const response = await PatchUserUseCase({ id, firstname, lastname, email, is_active });

        if (response instanceof Failure) {
            return res.status(response.statusCode).json({ error: response.message });
        }
        return res.status(201).json({ message: 'User updated successfully', data: response });

    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

