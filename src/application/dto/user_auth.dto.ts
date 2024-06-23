import { Expose } from "class-transformer";

export default class UserAuthDto {
    @Expose()
    public email: string

    @Expose()
    public password: string

    @Expose()
    public accountCode: string

    constructor(
        email: string,
        password: string,
        accountCode: string
    ) {
        this.email = email,
            this.password = password,
            this.accountCode = accountCode
    }
}