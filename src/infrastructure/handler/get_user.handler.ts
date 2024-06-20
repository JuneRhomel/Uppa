import ApiGatewayHelperParams from "../../application/interface/api_gateway_helper.params";
import UserEntity from "../../domain/entity/user.entity";
import Failure from "../../domain/failure/failure";
import GetUserUseCase from "../../domain/use_case/get_user/get_user.use_case";

export default async function GetUserHandler({ req }: ApiGatewayHelperParams): Promise<UserEntity | Failure> {
    try {
        const id = parseInt(req.params.id);
        const response = await GetUserUseCase({ id });
        if (response instanceof Failure) {
            return response;
        }
        return response;
    } catch (error) {
        return new Failure('Failed to get user', error, 500);
    }
}