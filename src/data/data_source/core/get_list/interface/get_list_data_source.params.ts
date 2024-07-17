export default interface GetListDataSourceParams {
    database: string,
    table: string,
    page: number,
    numberOfRows: number,
    search: string,
    columns: string[],
    sortBy: string,
    sortOrder:  "ASC" | "DESC" | "",
    filters: string[]
}