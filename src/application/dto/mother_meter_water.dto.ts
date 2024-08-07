import { IsNumber, IsOptional, IsString } from "class-validator";

export default class MotherMeterWaterDto {

    @IsNumber()
    @IsOptional()
    id: number | undefined;

    @IsString()
    serialNumber: string;


    constructor(
        id: number,
        serialNumber: string
    ) {
        this.id = id;
        this.serialNumber = serialNumber;
    }
}