import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import MotherMeterElectricityModel from "../../../model/mother_meter/mother_meter_electricity.model";
import GetMotherMeterElectricityListDataSourceParams from "./interface/get_mother_meter_electicity_list_data_source.params";
import { plainToInstance } from "class-transformer";

export default async function GetMotherMeterElectricityListDataSource({ authModel, paginationModel }: GetMotherMeterElectricityListDataSourceParams): Promise<MotherMeterElectricityModel[] | Failure> {
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
        FROM ${accountCode}.mother_meter_electricity
        WHERE deleted_at IS NULL
            ${filterConditions ? `${filterConditions}` : ""}
            ${search ? `AND (${searchColumns})` : ""}
            ${sortBy && sortOrder ? `${sortOrderCondition}` : ""}
        LIMIT ${numberOfRows} OFFSET ${(page - 1) * numberOfRows}
        `;

        const data = await SqlQuery(query);

        const motherMeterWaterModels = plainToInstance(MotherMeterElectricityModel, data);

        return motherMeterWaterModels;

    } catch (error) {
        return FailureMapperUtil(error)
    }
}