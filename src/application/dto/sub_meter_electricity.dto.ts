import { Expose } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export default class SubMeterElectricityDto {
    @Expose()
    id: number | undefined;

    @Expose()
    serialNumber: string;

    @Expose()
    motherMeterId: number | undefined;

    @Expose()
    unitId: number | undefined;



    constructor(
        id: number | undefined,
        serialNumber: string,
        motherMeterId: number | undefined,
        motherMeterSerialNumber: string | undefined,
        unitId: number | undefined,
        unitName: string | undefined,
        createdAt: Date | null

    ) {
        this.id = id;
        this.serialNumber = serialNumber;
        this.motherMeterId = motherMeterId;
        this.unitId = unitId;
    }
}


