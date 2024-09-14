import { Expose } from "class-transformer";


export default class RegisterModel {
    @Expose({ name: 'id' })
    public id: number;

    @Expose({ name: 'first_name' })
    public firstname: string;

    @Expose({ name: 'last_name' })
    public lastname: string;

    @Expose({ name: 'email' })
    public email: string;

    @Expose({ name: 'password' })
    public password: string;

    @Expose({ name: 'contact_number' })
    public contactNumber: string;

    @Expose({ name: 'created_at' })
    public createdAt: Date;

    @Expose({ name: 'is_active' })
    public isActive: number;

    @Expose({ name: 'role_id' })
    public roleId: number

    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        contactNumber: string,
        isActive: number,
        roleId: number,
        createdAt: Date,
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
        this.createdAt = createdAt;
        this.isActive = isActive;
        this.roleId = roleId
    }
}