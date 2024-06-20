export default interface GetUserListUseCaseParams {
    database: string,
    page: number,
    numberOfRows: number,
    search: string,
    columns: string,
    sortBy: string,
    sortOrder:  "ASC" | "DESC" | "",
    filters: string 
}