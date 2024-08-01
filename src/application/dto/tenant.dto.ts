import { Expose } from "class-transformer";

export default class TenantDto {
    @Expose()
    public id: number | undefined;

    @Expose()
    public first_name: string;

    @Expose()
    public last_name: string;

    @Expose()
    public status: string;

    @Expose()
    public contact_number: string;

    @Expose()
    public email: string;


    constructor(
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        status: string,
        contact_number: string,
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.status = status;
        this.contact_number = contact_number;
    }
}