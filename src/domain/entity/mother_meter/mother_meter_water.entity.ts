import { Expose } from "class-transformer";
import { IsDate, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export default class MotherMeterWaterEntity {
    @Expose()
    @IsNumber()
    @IsOptional()
    id: number | undefined;

    @Expose()
    @IsString()
    serialNumber: string;

    @Expose()
    @IsDate()
    @IsOptional()
    createdAt: Date | null;


    constructor(
        id: number | undefined,
        serialNumber: string,
        createdAt: Date | null
    ) {
        this.id = id;
        this.serialNumber = serialNumber;
        this.createdAt = createdAt;
    }
}


