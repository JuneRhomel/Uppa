import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import GetUserDataSourceParams from "./interface/get_list_data_source.params";

export default async function GetListDataSource({
    database,
    table,
    page,
    numberOfRows,
    search,
    columns,
    sortBy,
    sortOrder,
    filters
}: GetUserDataSourceParams): Promise<any[] | Failure> {
    try {
        const searchableColumns = columns;
        const searchCondition = searchableColumns.map(column => `${column} LIKE '%${search}%'`).join(' OR ');

        const filterConditions = `AND ${filters.map(filter => `${filter}`).join(' AND ')}`;
        const sortCondition = `${sortBy} ${sortOrder}`;
        const query = `
            SELECT * FROM ${database}.${table} 
            WHERE delated_at IS NULL
            AND (${searchCondition})
            ${filters.pop() ? `${filterConditions}` : ''}
            ORDER BY ${sortCondition}
            LIMIT ${numberOfRows} OFFSET ${(page - 1) * numberOfRows};
        `;
        const data = await SqlQuery(query);
        return data;
    } catch (error) {
        return FailureMapperUtil(error)
    }
}
