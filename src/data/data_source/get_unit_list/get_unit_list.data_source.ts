import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import SqlQuery from "../../../sql/database_pool.sql";
import UnitModel from "../../model/unit/unit.model";
import GetUnitListDataSourceParams from "./interface/get_unit_list_data_source,params";

export default async function getUnitList({
    paginationModel,
    authModel
}: GetUnitListDataSourceParams): Promise<UnitModel[] | Failure> {
    try {
        const { search, filters, page, numberOfRows, columns, sortBy, sortOrder } = paginationModel;
        const { accountCode } = authModel;

        const searchColumns = columns.map(column => `${column} LIKE '%${search}%'`).join(' OR ');
        const filterConditions = filters.map(filter => `${filter}`).join(' AND ');
        const sortOrderCondition = `${sortBy} ${sortOrder}`;

        const query = `
            SELECT 
                unit.id as id,
                unit.unit_name as unit_name,
                unit.unit_type_id as unit_type_id,
                list_unit_type.unit_type_name as unit_type_name,
                unit.unit_status_id as unit_status_id,
                list_unit_status.unit_status_name as unit_status_name,
                unit.created_at as created_at,
                unit.updated_at as updated_at,
                unit.deleted_at as deleted_at,
                unit.created_by as created_by,
                unit.deleted_by as deleted_by,
                unit.updated_by as updated_by
            FROM ${accountCode}.unit
            INNER JOIN ${accountCode}.list_unit_status 
                ON unit.unit_status_id = list_unit_status.id
            INNER JOIN ${accountCode}.list_unit_type 
                ON unit.unit_type_id = list_unit_type.id
            WHERE unit.deleted_at IS NULL
            AND (${searchColumns})
            ${filterConditions ? `AND ${filterConditions}` : ''}
            ORDER BY ${sortOrderCondition}
            LIMIT ${numberOfRows} OFFSET ${(page - 1) * numberOfRows};
        `;

        return await SqlQuery(query);

    } catch (error) {
        return FailureMapperUtil(error);
    }
}
