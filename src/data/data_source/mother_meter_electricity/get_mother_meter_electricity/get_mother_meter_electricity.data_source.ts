import { plainToInstance } from "class-transformer"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import MotherMeterElectricityModel from "../../../model/mother_meter/mother_meter_electricity.model";
import GetMotherMeterElectricityDataSourceParams from "./interface/get_mother_meter_electricity_data_source.params";

export default async function GetMotherMeterElectricityDataSource({ authModel, id }: GetMotherMeterElectricityDataSourceParams): Promise<any> {
    try {
        const sql = `SELECT * FROM ${authModel.accountCode}.mother_meter_electricity WHERE id = ${id}`;
        const data = await SqlQuery(sql);

        return plainToInstance(MotherMeterElectricityModel, data[0] as object, { excludeExtraneousValues: true })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}