import GetSubMeterElectricityListEntity from "../../../../domain/entity/sub_meter/sub_meter_electricity_list.entity";
import Failure from "../../../../domain/failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../../sql/database_pool.sql";
import GetSubMeterElectricityListDataSourceParams from "./interface/get_sub_meter_electricity_list_data_source.params";

export default async function GetSubMeterElectricityListDataSource({ authModel, paginationModel }: GetSubMeterElectricityListDataSourceParams): Promise<Failure | GetSubMeterElectricityListEntity> {
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
            sub_meter_electricity.id,
            sub_meter_electricity.serial_number,
            sub_meter_electricity.unit_id,
            sub_meter_electricity.mother_meter_id
            unit.unit_name,
            mother_meter_electricity.serial_number as mother_meter_serial_number,
            sub_meter_electricity.created_at
         FROM ${accountCode}.sub_meter_electricity
            INNER JOIN ${accountCode}.unit ON sub_meter_electricity.unit_id = unit.id
            INNER JOIN ${accountCode}.mother_meter_electricity ON sub_meter_electricity.mother_meter_id = mother_meter_electricity.id
         WHERE sub_meter_electricity.deleted_at IS NULL
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
