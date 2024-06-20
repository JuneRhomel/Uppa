import Failure from "../../../domain/failure/failure";
import SqlQuery from "../../../sql/database_pool.sql";
import GetTotalListRowsDataSourceParams from "./interface/get_total_list_rows_data_source.params";

export default async function GetTotalListRowsDataSource({ database, table }: GetTotalListRowsDataSourceParams): Promise<number | Failure> {
    try {
        const query = `SELECT COUNT(id) AS total FROM ${database}.${table} WHERE is_deleted = 0;`;
        const data = await SqlQuery(query);
        return data[0].total;
    } catch (error) {
        return new Failure('Failed in get total list rows data source', error, 500);
    }
}