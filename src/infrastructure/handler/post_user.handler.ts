import { Response } from 'express';
import ApiGatewayHelperParams from "../../application/interface/api_gateway_helper.params";
import ValidationFailure from "../../domain/failure/common/validation";
import Failure from "../../domain/failure/failure";
import PostUserUseCase from "../../domain/use_case/post_user/post_user.use_case";

export default async function PostUserHandler({ req, res }: ApiGatewayHelperParams): Promise<void | Response> {
    try {
        const { firstname, lastname, email, password, confirmPassword } = req.body;
        const response = await PostUserUseCase({ firstname, lastname, email, password, confirmPassword });


        if (response instanceof ValidationFailure) {
            return res.status(response.statusCode).json({ error: response.message });
        }


        if (response instanceof Failure) {
            return res.status(response.statusCode).json({ error: response.message });
        }


        return res.status(201).json({ message: 'User created successfully', data: response });
    } catch (error) {
        console.error('Error in PostUserHandler:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
