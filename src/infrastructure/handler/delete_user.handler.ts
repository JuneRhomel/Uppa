import ApiGatewayHelperParams from "../../application/interface/api_gateway_helper.params";
import Failure from "../../domain/failure/failure";
import DeleteUserUseCase from "../../domain/use_case/delete_user/delete_user.use_case";

export default async function DeleteUserHadler({ req }: ApiGatewayHelperParams): Promise<void | Failure> {
    try {
        const id = parseInt(req.params.id);
        const response = DeleteUserUseCase({ id });
        if (response instanceof Failure) {
            return response;
        }
        return response;
    } catch (error) {
        return new Failure('Failed to delete user', error, 500);
    }
}