import GetListDataSource from "../../../data/data_source/get_list/get_list.data_source";
import GetTotalListRowsDataSource from "../../../data/data_source/get_total_list_rows/get_total_list_rows.data_source";
import GetUserListEntity from "../../entity/get_user_list.entity";
import Failure from "../../failure/failure";
import GetUserUseCaseParams from "./interface/get_user_list_use_case.params";

export default async function GetUserListUseCase({ database, page, numberOfRows, search, columns, sortBy, sortOrder, filters }: GetUserUseCaseParams): Promise<GetUserListEntity | Failure> {
    try {
        const destructureColumns = columns.split(',');
        const destructureFilters = filters.split(',');
        const table = 'account';
        const userEntities = await GetListDataSource({ database, table, page, numberOfRows, search, columns: destructureColumns, sortBy, sortOrder, filters: destructureFilters });
        const userTotalListRow = await GetTotalListRowsDataSource({ database, table });

        if (userEntities instanceof Failure) {
            return userEntities;
        }
        if (userTotalListRow instanceof Failure) {
            return userTotalListRow;
        }
        
        return new GetUserListEntity(userEntities, userTotalListRow);
    } catch (error) {
        return new Failure('Failed in get users use case', error, 500);
    }
}
