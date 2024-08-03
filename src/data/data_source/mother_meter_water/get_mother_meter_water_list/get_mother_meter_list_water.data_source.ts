import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import { plainToInstance } from "class-transformer";
import MotherMeterWaterModel from "../../../model/mother_meter/mother_meter_water.model";
import Failure from "../../../../domain/failure/failure";
import GetMotherMeterWaterListDataSourceParams from "./interface/get_mother_meter_water_list_data_source.params";

export default async function GetMotherMeterWaterListDataSource({ paginationModel, authModel }: GetMotherMeterWaterListDataSourceParams): Promise<MotherMeterWaterModel[] | Failure> {
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
            id,
            serial_number,
            created_at
        FROM ${accountCode}.mother_meter_water
        WHERE deleted_at IS NULL
            ${filterConditions ? `${filterConditions}` : ""}
            ${search ? `AND (${searchColumns})` : ""}
            ${sortBy && sortOrder ? `${sortOrderCondition}` : ""}
        LIMIT ${numberOfRows} OFFSET ${(page - 1) * numberOfRows}
        `;

        const data = await SqlQuery(query);

        const motherMeterWaterModels = plainToInstance(MotherMeterWaterModel, data);

        return motherMeterWaterModels;
    } catch (error) {
        return FailureMapperUtil(error)
    }
}