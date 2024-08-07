import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import PostMotherMeterWaterDataSourceParams from "./interface/post_mother_meter_water_data_source.params";

export default async function PostMotherMeterWaterDataSource({ authModel, motherMeterWaterModel }: PostMotherMeterWaterDataSourceParams): Promise<void | Failure> {
    try {
        const createdBy = authModel.userId;
        motherMeterWaterModel.createdAt = new Date();
        const query = `INSERT INTO ${authModel.accountCode}.mother_meter_water (serial_number, created_at, created_by) VALUES (?, ?, ?);`;
        const params = [
            motherMeterWaterModel.serialNumber,
            motherMeterWaterModel.createdAt,
            createdBy
        ]
        await SqlQuery(query, params);
    } catch (error) {
        return FailureMapperUtil(error)
    }
}