import { Expose } from "class-transformer";
export default class MotherMeterElectricityDto {
    @Expose()
    serialNumber: string;
    constructor(
        serialNumber: string
    ) {
        this.serialNumber = serialNumber;
    }

}