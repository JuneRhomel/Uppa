import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import PatchDataDataSourceParams from "./interface/patch_data_data_source.params";

export default async function PatchDataDataSource({
    database,
    table,
    data,
    id
}: PatchDataDataSourceParams): Promise<void | Failure> {
    try {
        data.updated_at = new Date().toISOString();
        const columnNames = Object.keys(data).map(key => `${key} = ?`).join(', ');
        const values = Object.values(data);
        const query = `UPDATE ${database}.${table} SET ${columnNames} WHERE id = ?;`;
        const params = [...values, id];
        const result = await SqlQuery(query, params);
    } catch (error) {
        return FailureMapperUtil(error)
    }
}
