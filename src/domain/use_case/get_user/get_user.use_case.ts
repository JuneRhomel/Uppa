import GetDataDataSource from "../../../data/data_source/get_data/get_data.data_source";
import UserEntity from "../../entity/user.entity";
import Failure from "../../failure/failure";
import GetUserUseCaseParams from "./interface/get_user_use_case.params";

export default async function GetUserUseCase({ id }: GetUserUseCaseParams): Promise<UserEntity | Failure> {
    try {
        const userEntity = await GetDataDataSource({ database: 'account', table: 'account', id });
        if (userEntity instanceof Failure) {
            return userEntity;
        }
        return userEntity;
    } catch (error) {
        return new Failure('Failed in get user use case', error, 500);
    }
}