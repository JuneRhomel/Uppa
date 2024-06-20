import { Expose } from "class-transformer";


export default class UserModel {
    @Expose({ name: 'id' })
    public id: number;
    @Expose({ name: 'first_name' })
    public firstname: string;
    @Expose({ name: 'last_name' })
    public lastname: string;
    @Expose({ name: 'email' })
    public email: string;
    @Expose({ name: 'created_at' })
    public createdAt: Date;
    @Expose({ name: 'is_active' })
    public isActive: boolean;
    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        createdAt: Date,
        isActive: boolean
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.createdAt = createdAt;
        this.isActive = isActive;
    }
}