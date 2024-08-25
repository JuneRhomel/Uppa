import { Expose } from "class-transformer";

export default class SubMeterWaterModel {
    @Expose({ name: "id" })
    id: number | undefined;

    @Expose({ name: "serial_number" })
    serialNumber: string;

    @Expose({ name: "mother_meter_id" })
    motherMeterId: number | undefined;

    @Expose({ name: "mother_meter_serial_number" })
    motherMeterSerialNumber: string | undefined;

    @Expose({ name: "unit_id" })
    unitId: number | undefined;

    @Expose({ name: "unit_name" })
    unitName: string | undefined;


    @Expose({ name: "created_at" })
    createdAt: Date | null;


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
        this.motherMeterSerialNumber = motherMeterSerialNumber;
        this.unitId = unitId;
        this.unitName = unitName;
        this.createdAt = createdAt;
    }
}


