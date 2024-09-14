import { Expose } from "class-transformer";
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from "class-validator";


export default class UserEntity {
    @Expose()
    @IsNumber()
    @IsOptional()
    public id: number;


    @Expose()
    @IsString()
    public firstname: string;


    @Expose()
    @IsString()
    public lastname: string;


    @Expose()
    @IsString()
    public email: string;

    @Expose()
    @IsDate()
    public createdAt: Date;
    
    @Expose()
    @IsBoolean()
    public isActive: boolean;
    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        createdAt: Date,
        isActive: boolean
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.createdAt = createdAt;
        this.isActive = isActive;
    }
}