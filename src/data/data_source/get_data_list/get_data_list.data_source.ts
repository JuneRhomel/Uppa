import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import GetDataListDataSourceParams from "./interface/get_data_list_data_source";

export default async function GetDataListDataSource({ authModel, table, search, searchBy }: GetDataListDataSourceParams): Promise<any[] | Failure> {
    try {
        const searchCondition = `AND (${searchBy} LIKE '%${search}%')`;

        const query = `SELECT * FROM ${authModel.accountCode}.${table} WHERE deleted_at IS NULL ${search ? searchCondition : ""} ORDER BY id DESC;`;
        const data = await SqlQuery(query);
        return data;
    } catch (error) {
        return FailureMapperUtil(error)
    }
}