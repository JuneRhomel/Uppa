import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export default class UserEntity {
    @Expose()
    @IsNotEmpty()
    public id: number;

    @Expose()
    @IsNotEmpty()
    public firstname: string;

    @Expose()
    @IsNotEmpty()
    public lastname: string;

    @Expose()
    @IsNotEmpty()
    public email: string;

    @Expose()
    @IsNotEmpty()
    public createdAt: Date;

    @Expose()
    @IsNotEmpty()
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