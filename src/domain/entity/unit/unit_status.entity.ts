import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { Expose } from "class-transformer";


export default class UnitStatusEntity {
    @Expose()
    @IsNumber()
    @IsOptional()
    public id: number | undefined;

    @Expose()
    @IsString()
    public unit_status_name: string;

    @Expose()
    @IsDate()
    @IsOptional()
    public created_at: Date | undefined;

    @Expose()
    @IsDate()
    @IsOptional()
    public updated_at: Date | undefined;

    @Expose()
    @IsDate()
    @IsOptional()
    public deleted_at: Date | undefined;

    @Expose()
    @IsNumber()
    @IsOptional()
    public deleted_by: number | undefined;

    @Expose()
    @IsNumber()
    @IsOptional()
    public updated_by: number | undefined;


    constructor(
        id: number | undefined,
        unit_status_name: string,
        created_at: Date | undefined,
        updated_at: Date | undefined,
        deleted_at: Date | undefined,
        deleted_by: number | undefined,
        updated_by: number | undefined
    ) {
        this.id = id;
        this.unit_status_name = unit_status_name;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
        this.deleted_by = deleted_by;
        this.updated_by = updated_by;
    }
}
