import GetDataDataSource from "../../../data/data_source/get_data/get_data.data_source";
import UserEntity from "../../entity/user.entity";
import Failure from "../../failure/failure";
import GetUserUseCaseParams from "./interface/get_user_use_case.params";

export default async function getUser({ id }: GetUserUseCaseParams): Promise<UserEntity | Failure> {
    try {
        const user = await GetDataDataSource({ database: 'uppa_accounts', table: 'account', id });
        if (user instanceof Failure) {
            return user;
        }
        return user.pop();
    } catch (error) {
        return new Failure('Failed to retrieve user', error, 500);
    }
}
