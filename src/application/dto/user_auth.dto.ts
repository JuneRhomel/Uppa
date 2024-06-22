import { Expose } from "class-transformer";

export default class UserAuthDto {
    @Expose()
    public email: string

    @Expose()
    public password: string

    @Expose()
    public confirmPassword: string

    @Expose()
    public accountCode: string

    constructor(
        email: string,
        password: string,
        confirmPassword: string,
        accountCode: string
    ) {
        this.email = email,
            this.password = password,
            this.confirmPassword = confirmPassword,
            this.accountCode = accountCode
    }
}