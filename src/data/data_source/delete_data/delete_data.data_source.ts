import Failure from "../../../domain/failure/failure";
import SqlQuery from "../../../sql/database_pool.sql";
import DeleteDataDataSourceParams from "./interface/delete_data_data_source.params";

export default async function DeleteDataDataSource({ database, table, id }: DeleteDataDataSourceParams): Promise<void | Failure> {
    try {
        const dateTime = new Date().toISOString()
        const query = `UPDATE ${database}.${table} SET delated_at = '${dateTime}' WHERE id = ${id};`;

        const result = await SqlQuery(query);
        console.log(result);
    } catch (error) {
        return new Failure('Failed in delete data data source', error, 500);
    }
}