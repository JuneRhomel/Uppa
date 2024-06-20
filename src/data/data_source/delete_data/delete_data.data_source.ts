import Failure from "../../../domain/failure/failure";
import SqlQuery from "../../../sql/database_pool.sql";
import DeleteDataDataSourceParams from "./interface/delete_data_data_source.params";

export default async function DeleteDataDataSource({ database, table, id }: DeleteDataDataSourceParams): Promise<void | Failure> {
    try {
        const query = `UPDATE ${database}.${table} SET is_deleted = 1 WHERE id = ${id};`;
        await SqlQuery(query);
    } catch (error) {
        return new Failure('Failed in delete data data source', error, 500);
    }
}