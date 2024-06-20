import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class PaginationEntity {
    @Expose()
    @IsString()
    @IsNotEmpty()
    public search: string;

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    public page: number;

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    public numberOfRows: number;

    constructor(
        search: string = "",
        page: number = 1,
        numberOfRows: number = 10
    ) {
        this.search = search;
        this.page = page;
        this.numberOfRows = numberOfRows;
    }
}
