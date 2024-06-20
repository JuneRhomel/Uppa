import { IsNotEmpty } from "class-validator";
import { Expose } from "class-transformer";
import UserEntity from "./user.entity";

export default class GetUserListEntity {

    @Expose()
    @IsNotEmpty()
    public userEntities: UserEntity[];

    @Expose()
    @IsNotEmpty()
    public totalRows: number;

    constructor(userEntities: UserEntity[], totalRows: number) {
        this.userEntities = userEntities;
        this.totalRows = totalRows;
    }
}