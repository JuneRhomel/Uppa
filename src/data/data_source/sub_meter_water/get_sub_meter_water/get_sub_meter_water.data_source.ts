import { plainToInstance } from "class-transformer";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import SubMeterWaterModel from "../../../model/sub_meter/sub_meter_water.model";
import GetSubMeterWaterDataSourceParams from "./interface/get_sub_meter_water_data_source"; 


export default async function GetSubMeterWaterDataSource({ authModel, id }: GetSubMeterWaterDataSourceParams): Promise<any> {
    try {
        const sql = `SELECT * FROM ${authModel.accountCode}.sub_meter_water WHERE id = ${id} AND deleted_at IS NULL;`;
        const data = await SqlQuery(sql);
        return plainToInstance(SubMeterWaterModel, data[0] as object, { excludeExtraneousValues: true })
    } catch (error) {
        return FailureMapperUtil(error)
    }
}