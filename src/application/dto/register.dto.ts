import { Expose } from "class-transformer";


export default class RegisterDto {
    @Expose()
    public id: number;

    @Expose()
    public firstname: string;

    @Expose()
    public lastname: string;

    @Expose()
    public email: string;

    @Expose()
    public password: string;

    @Expose()
    public contactNumber: string;

    @Expose()
    public confirmPassword: string;

    @Expose()
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