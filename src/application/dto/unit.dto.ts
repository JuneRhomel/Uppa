import { Expose } from "class-transformer";
export default class UnitDto {
    @Expose()
    public unit_name: string;
    @Expose()
    public unit_type_id: number;
    @Expose()
    public unit_status_id: number;

    constructor(
        unit_name: string,
        unit_type_id: number,
        unit_status_id: number,
    ) {
        this.unit_name = unit_name;
        this.unit_type_id = unit_type_id;
        this.unit_status_id = unit_status_id;
    }

}