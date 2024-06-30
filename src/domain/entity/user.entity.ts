import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export default class UserEntity {
    @Expose()
    @IsNotEmpty()
    public id: number;

    @Expose()
    @IsNotEmpty()
    @MinLength(4)
    public firstname: string;

    @Expose()
    @IsNotEmpty()
    @MinLength(4)
    public lastname: string;

    @Expose()
    @IsNotEmpty()
    @IsEmail()
    @MinLength(10)
    public email: string;

    @Expose()
    @IsNotEmpty()
    // @MinLength(4)
    // @MaxLength(20)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' })
    public password: string;

    @Expose()
    @IsNotEmpty()
    // @MinLength(4)
    // @MaxLength(20)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' })
    public confirmPassword: string;

    @Expose()
    @IsNotEmpty()
    public createdAt: string;

    @Expose()
    @IsNotEmpty()
    public isActive: boolean;

    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        confirmPassword: string,
        createdAt: string,
        isActive: boolean
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.createdAt = createdAt;
        this.isActive = isActive;
    }
}