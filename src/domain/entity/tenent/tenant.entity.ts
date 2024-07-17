import { Expose } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString, Length } from "class-validator";

export default class TenantModel {
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
    public get full_name(): string {
        return `${this.first_name} ${this.last_name}`;
    }

    @Expose()
    @IsString()
    @Length(12)
    public phone_number: string;

    @Expose()
    @IsString()
    @Length(3, 100)
    public email: string;

    @Expose()
    @IsNumber()
    public is_active: number;

    @Expose()
    @IsDate()
    public created_at: Date | undefined;

    @Expose()
    @IsDate()
    public updated_at: Date | undefined;

    @Expose()
    @IsNumber()
    public created_by: number;

    @Expose()
    @IsNumber()
    public updated_by: number;


    constructor(
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        phone_number: string,
        is_active: number,
        created_at: Date,
        updated_at: Date,
        created_by: number,
        updated_by: number
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.is_active = is_active;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}