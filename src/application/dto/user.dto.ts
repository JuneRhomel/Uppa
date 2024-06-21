import { Expose } from "class-transformer";


export default class UserDto {
    @Expose()
    public firstname:string;

    @Expose()
    public lastname: string;

    @Expose()
    public email: string;

    @Expose()
    public password: string;

    @Expose()
    public confirmPassword: string;

    constructor(
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        confirmPassword: string
    ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword
    }
}