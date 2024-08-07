import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import PostMotherMeterElectricityDataSourceParams from "./interface/post_mother_meter_electricity_data_source.params";

export default async function PostMotherMeterElectricityDataSource({ authModel, motherMeterElectricityModel }: PostMotherMeterElectricityDataSourceParams): Promise<void | Failure> {
    try {
        motherMeterElectricityModel.createdAt = new Date();
        const sql = `
            INSERT INTO ${authModel.accountCode}.mother_meter_electricity (serial_number, created_at,created_by) VALUES (?, ?, ?)
        `;

        const params = [
            motherMeterElectricityModel.serialNumber,
            motherMeterElectricityModel.createdAt,
            authModel.userId
        ];

        return await SqlQuery(sql, params);
    } catch (error) {
        return FailureMapperUtil(error)
    }
}