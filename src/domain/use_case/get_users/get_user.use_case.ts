import GetUserUseCaseDependency from "./interface/get_user_use_case.depencency";
import GetUserUseCaseInterface from "./interface/get_user_use_case.interface";

export default function GetUsersUseCase({ getUserDataSource }: GetUserUseCaseDependency): GetUserUseCaseInterface {
    return async ({ database, table }) => {
        return getUserDataSource({ database, table });
    }
}