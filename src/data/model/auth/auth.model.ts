import { Expose } from "class-transformer";

export default class AuthModel {
    @Expose()
    public userId: number;
    @Expose()
    public email: string;
    @Expose()
    public accountCode: string;
    @Expose()
    public token: string;

    constructor(
        userId: number,
        email: string,
        accountCode: string,
        token: string
    ) {
        this.userId = userId
        this.email = email
        this.accountCode = accountCode
        this.token = token
    }
}