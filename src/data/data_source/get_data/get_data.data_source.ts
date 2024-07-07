import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import GetDataDataSourceParams from "./interface/get_data_data_source.params";

export default async function GetDataDataSource({ id, table, authModel }: GetDataDataSourceParams): Promise<any> {
    try {

        const query = `SELECT * FROM ${authModel.accountCode}.${table} WHERE ${id? `id = ${id} AND` : "" } deleted_at IS NULL;`;
        const data = await SqlQuery(query);
        if (data.length === 1) { 
            return data.pop();
        } 

        return data;
    } catch (error) {
        return FailureMapperUtil(error)
    }
}
