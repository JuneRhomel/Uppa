import { Expose } from "class-transformer";
import MotherMeterWaterEntity from "./mother_meter_water.entity";
import { IsNumber } from "class-validator";
import MotherMeterElectricityEntity from "./mother_meter_electricity.entity";


export default class MotherMeterElectricityListEntity {
    @Expose()
    @IsNumber()
    public totalRows: number;

    @Expose()
    public motherMeterElectricityEntity: MotherMeterElectricityEntity[];

    constructor(motherMeterElectricityEntity: MotherMeterElectricityEntity[], totalRows: number) {
        this.motherMeterElectricityEntity = motherMeterElectricityEntity;
        this.totalRows = totalRows;
    }
}