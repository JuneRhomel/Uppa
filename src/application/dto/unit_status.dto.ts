import { Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
export default class UnitStatusDto {
    @Expose()
    @IsString()
    public unit_status_name: string;

    constructor(
        unit_status_name: string,
    ) {
        this.unit_status_name = unit_status_name;
    }

}