import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export default class UnitTypeDto {
    @Expose()
    @IsString()
    public unit_type_name: string;

    constructor(
        unit_type_name: string,
    ) {
        this.unit_type_name = unit_type_name
    }
}