import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import SubMeterWaterModel from "../../../model/sub_meter/sub_meter_water.model";
import GetSubMeterWaterListDataSourceParams from "./interface/get_sub_meter_water_list_data_source";

export default async function GetSubMeterWaterListDataSource({ authModel, paginationModel }: GetSubMeterWaterListDataSourceParams): Promise<Failure | SubMeterWaterModel[]> {
    try {
        const { search, filters, page, numberOfRows, columns, sortBy, sortOrder } =
            paginationModel;
        const { accountCode } = authModel;

        const searchColumns = columns
            .map((column) => `${column} LIKE '%${search}%'`)
            .join(" OR ");
        const sortOrderCondition = `ORDER BY ${sortBy} ${sortOrder}`;

        const validFilters = filters.filter((filter) => !filter.includes("All"));

        let filterConditions = "";
        if (validFilters.length > 0) {
            filterConditions = `AND ${validFilters
                .map((filter) => `${filter}`)
                .join(" AND ")}`;
        }

        const query = `
        SELECT 
            sub_meter_water.id,
            sub_meter_water.serial_number,
            sub_meter_water.unit_id,
            sub_meter_water.mother_meter_id
            unit.unit_name,
            mother_meter_water.serial_number as mother_meter_serial_number,
            sub_meter_water.created_at
         FROM ${accountCode}.sub_meter_water
            INNER JOIN ${accountCode}.unit ON sub_meter_water.unit_id = unit.id
            INNER JOIN ${accountCode}.mother_meter_water ON sub_meter_water.mother_meter_id = mother_meter_water.id
         WHERE sub_meter_water.deleted_at IS NULL
         ${filterConditions ? `${filterConditions}` : ""}
         ${search ? `AND (${searchColumns})` : ""}
         ${sortBy && sortOrder ? `${sortOrderCondition}` : ""}
         LIMIT ${numberOfRows} OFFSET ${(page - 1) * numberOfRows}
     `;
        return await SqlQuery(query);
    } catch (error) {
        return FailureMapperUtil(error);
    }
}
