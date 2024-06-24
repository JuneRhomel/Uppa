import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import PostDataDataSourceParams from "./interface/post_data_data_source.params";

export default async function PostDataDataSource({
    authModel,
    table,
    data
}: PostDataDataSourceParams): Promise<void | Failure> {
    try {
        const fillterData = Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== undefined && value !== null && value !== ''));
        fillterData.created_by = authModel.userId
        console.log(authModel.userId)

        const columnNames = Object.keys(fillterData);
        const values = Object.values(fillterData);
        const escapedValues = values.map(val => (typeof val === 'string') ? `'${val}'` : val).join(', ');

        const query = `INSERT INTO ${authModel.accountCode}.${table} (${columnNames.join(', ')}) VALUES (${escapedValues})`;

        await SqlQuery(query);
    } catch (error) {
        return FailureMapperUtil(error);
    }
}