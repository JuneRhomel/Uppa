import { Expose } from "class-transformer";
import { IsString, isString } from "class-validator";

export default class AuthEntity {
    @Expose()
    @IsString()
    public email: string

    @Expose()
    @IsString()
    public accountCode: string

    @Expose()
    @IsString()
    public password: string

    constructor(
        email: string,
        accountCode: string,
        password: string
    ) {
        this.email = email
        this.accountCode = accountCode
        this.password = password
    }
}