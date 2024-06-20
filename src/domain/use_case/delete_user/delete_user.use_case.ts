import DeleteDataDataSource from "../../../data/data_source/delete_data/delete_data.data_source";
import Failure from "../../failure/failure";
import DeleteUserUseCaseParams from "./interface/delete_user_use_case.params";

export default async function DeleteUserUseCase({ id }: DeleteUserUseCaseParams): Promise<void | Failure> {
    try {
        const deleteData = await DeleteDataDataSource({ database: 'account', table: 'account', id });
        if (deleteData instanceof Failure) {
            return deleteData;
        }
        return deleteData;
    } catch (error) {
        return new Failure('Failed in delete user use case', error, 500);
    }
}