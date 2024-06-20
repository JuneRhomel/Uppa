import { AwilixContainer, asFunction } from "awilix";
import GetUsersUseCase from "../../domain/use_case/get_users/get_user.use_case";

export default function RegisterUseCase(container: AwilixContainer) {
    container.register({
        getUsersUseCase: asFunction(GetUsersUseCase),
    });
}