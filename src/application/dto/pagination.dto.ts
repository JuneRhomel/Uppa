import { Expose } from "class-transformer";

export default class PaginationDto {
  @Expose()
  public search: string;

  @Expose()
  public page: string;

  @Expose()
  public numberOfRows: string;

  @Expose()
  public columns: string;

  @Expose()
  public sortBy: string;

  @Expose()
  public sortOrder: "ASC" | "DESC" | "";

  @Expose()
  public filters: string;

  constructor(
    search: string, 
    page: string, 
    numberOfRows: string, 
    columns: string, 
    sortBy: string, 
    sortOrder: "ASC" | "DESC" | "",
    filters: string
  ) {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
    this.search = search;
    this.page = page;
    this.numberOfRows = numberOfRows;
    this.columns = columns,
    this.filters = filters
  }
}
