import { Expose } from "class-transformer";


export default class AuthResponseModel {
    @Expose({ name: 'id' })
    public id: number;
    @Expose({ name: 'firstname' })
    public firstname: string;
    @Expose({ name: 'lastname' })
    public lastname: string;
    @Expose({ name: 'email' })
    public email: string;
    @Expose({ name: 'account_code' })
    public accountCode: string;

    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        accountCode: string
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.accountCode = accountCode;
    }
}