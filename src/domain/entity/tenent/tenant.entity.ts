import { Expose } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString, Length } from "class-validator";

export default class TenantEntity {
    @Expose()
    @IsOptional()
    @IsNumber()
    public id: number;

    @Expose()
    @IsString()
    @Length(3, 100)
    public first_name: string;

    @Expose()
    @IsString()
    @Length(3, 100)
    public last_name: string;

    @Expose()
    @IsString()
    @IsOptional()
    public status: string | undefined;;

    @Expose()
    @IsNumber()
    public status_id: number;

    @Expose()
    @IsString()
    @Length(11)
    public contact_number: string;

    @Expose()
    @IsString()
    @Length(3, 100)
    public email: string;

    @Expose()
    @IsDate()
    @IsOptional()
    public created_at: Date | undefined;

    @Expose()
    @IsDate()
    @IsOptional()
    public updated_at: Date | undefined;

    @Expose()
    @IsNumber()
    @IsOptional()
    public created_by: number | undefined;

    @Expose()
    @IsNumber()
    @IsOptional()
    public updated_by: number | undefined;


    constructor(
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        status: string,
        status_id: number,
        contact_number: string,
        created_at: Date | undefined,
        updated_at: Date | undefined,
        created_by: number | undefined,
        updated_by: number | undefined
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.status = status;
        this.status_id = status_id;
        this.contact_number = contact_number;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}