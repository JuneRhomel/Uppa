import Failure from "../../../domain/failure/failure";
import SqlQuery from "../../../sql/database_pool.sql";
import GetDataDataSourceParams from "./interface/get_data_data_source.params";

export default async function GetDataDataSource({ database, table, id }: GetDataDataSourceParams) {
    try {
        const query = `SELECT * FROM ${database}.${table} WHERE id = ${id} AND is_deleted = 0;`;
        const data = await SqlQuery(query);
        return data;
    } catch (error) {
        return new Failure('Failed in get data data source', error, 500);
    }
}
