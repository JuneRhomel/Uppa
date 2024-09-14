import { Expose } from "class-transformer";
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString, IsStrongPassword } from "class-validator";


export default class RegisterEntity {
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
    @IsString()
    @IsStrongPassword()
    public password: string;

    @Expose()
    @IsString()
    public confirmPassword: string;

    @Expose()
    @IsString()
    public contactNumber: string;

    @Expose()
    @IsNumber()
    @IsOptional()
    public roleId: number

    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        confirmPassword: string,
        contactNumber: string,
        roleId: number
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword
        this.contactNumber = contactNumber;
        this.roleId = roleId
    }
}