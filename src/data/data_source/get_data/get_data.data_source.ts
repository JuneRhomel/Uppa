import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import GetDataDataSourceParams from "./interface/get_data_data_source.params";

export default async function GetDataDataSource({ database, table, id }: GetDataDataSourceParams) {
    try {
        const query = `SELECT * FROM ${database}.${table} WHERE id = ${id} AND delated_at IS NUll;`;
        const data = await SqlQuery(query);
        return data;
    } catch (error) {
        return FailureMapperUtil(error)
    }
}
