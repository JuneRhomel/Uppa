import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import PatchMotherMeterElectricityDataSourceParams from "./interface/patch_mother_meter_electricity_data_source.params";

export default async function PatchMotherMeterElectricityDataSource({ authModel, motherMeterElectricityModel }: PatchMotherMeterElectricityDataSourceParams): Promise<Failure | void> {
    try {
        const sql = `UPDATE ${authModel.accountCode}.mother_meter_electricity SET serial_number = ?, updated_at = CURRENT_TIMESTAMP, updated_by = ? WHERE id = ?`;
        const params = [
            motherMeterElectricityModel.serialNumber,
            authModel.userId,
            motherMeterElectricityModel.id
        ];
        await SqlQuery(sql, params);
    } catch (error) {
        return FailureMapperUtil(error);
    }
}