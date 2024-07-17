import { Expose } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";
export default class UnitEntity {
    @Expose()
    @IsNumber()
    @IsOptional()
    public id: number | undefined;

    @Expose()
    @IsString()
    public unit_name: string;

    @Expose()
    @IsNumber()
    public unit_type_id: number;

    @Expose()
    @IsNumber()
    public unit_status_id: number;

    @Expose()
    @IsString()
    @IsOptional()
    public unit_type_name: string;

    @Expose()
    @IsString()
    @IsOptional()
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
        unit_name: string,
        unit_type_id: number,
        unit_type_name: string,
        unit_status_id: number,
        unit_status_name: string,
        created_at: Date | undefined,
        updated_at: Date | undefined,
        deleted_at: Date | undefined,
        deleted_by: number | undefined,
        updated_by: number | undefined
    ) {
        this.id = id;
        this.unit_name = unit_name;
        this.unit_type_id = unit_type_id;
        this.unit_type_name = unit_type_name;
        this.unit_status_id = unit_status_id;
        this.unit_status_name = unit_status_name;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
        this.deleted_by = deleted_by;
        this.updated_by = updated_by;
    }

}