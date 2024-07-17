import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import DeleteDataDataSourceParams from "./interface/delete_data_data_source.params";

export default async function DeleteDataDataSource({ authModel, table, id }: DeleteDataDataSourceParams): Promise<void | Failure> {
    try {
        const dateTime = new Date().toISOString()
        const query = `UPDATE ${authModel.accountCode}.${table} SET deleted_at = '${dateTime}', deleted_by = ${authModel.userId} WHERE id = ${id};`;

        await SqlQuery(query);
    } catch (error) {
        return FailureMapperUtil(error)
    }
}