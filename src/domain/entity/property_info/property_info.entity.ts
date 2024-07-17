import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { Expose } from "class-transformer";


export default class PropertyInfoEntity {
    @Expose()
    @IsNumber()
    @IsOptional()
    public id: number | undefined;

    @Expose()
    @IsString()
    public property_name: string;

    @Expose()
    @IsString()
    public location: string;

    @Expose()
    @IsString()
    public tin: string;

    @Expose()
    @IsString()
    @IsOptional()
    public logo: string;

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
        property_name: string,
        location: string,
        tin: string,
        logo: string,
        created_at: Date | undefined,
        updated_at: Date | undefined,
        deleted_at: Date | undefined,
        deleted_by: number | undefined,
        updated_by: number | undefined
    ) {
        this.id = id;
        this.property_name = property_name;
        this.location = location;
        this.tin = tin;
        this.logo = logo;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
        this.deleted_by = deleted_by;
        this.updated_by = updated_by;
    }
}