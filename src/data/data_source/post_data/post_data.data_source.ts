import Failure from "../../../domain/failure/failure";
import SqlQuery from "../../../sql/database_pool.sql";
import PostDataDataSourceParams from "./interface/post_data_data_source.params";

export default async function PostDataDataSource({
    database,
    table,
    data
}: PostDataDataSourceParams): Promise<void | Failure> {
    try {
        data.created_at = new Date().toISOString();
        const columnNames = Object.keys(data);
        const values = Object.values(data);
        const escapedValues = values.map(val => (typeof val === 'string') ? `'${val}'` : val).join(', ');

        const query = `INSERT INTO ${database}.${table} (${columnNames.join(', ')}) VALUES (${escapedValues})`;

        await SqlQuery(query);
    } catch (error) {
        console.error('Error in PostDataDataSource:', error);
        return new Failure('Failed to post data', error, 500);
    }
}
