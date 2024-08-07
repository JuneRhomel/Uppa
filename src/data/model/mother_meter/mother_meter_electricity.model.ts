import { Expose } from "class-transformer";

export default class MotherMeterElectricityModel {
    @Expose({ name: "id" })
    id: number | undefined;

    @Expose({ name: "serial_number" })
    serialNumber: string;

    @Expose({ name: "created_at" })
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


