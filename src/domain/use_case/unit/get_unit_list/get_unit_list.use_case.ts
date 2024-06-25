import GetUnitListDataSource from "../../../../data/data_source/get_unit_list/get_unit_list.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import { plainToInstance } from "class-transformer";

import Failure from "../../../failure/failure";
import GetUnitUseCaseParams from "./interface/get_unit_list_use_case.params";
import PaginationModel from "../../../../data/model/panigation/panigation.model";
import UnitModel from "../../../../data/model/unit/unit.model";

export default async function GetUnitListUseCase({ paginationEntity, authModel }: GetUnitUseCaseParams): Promise<UnitModel[] | Failure> {
    try {

        const { search, filters, page, numberOfRows, columns, sortBy, sortOrder } = paginationEntity
        const destructureColumns = columns ? columns.split(',') : [];
        const destructureFilters = filters ? filters.split(',') : [];

        const paginationModel = plainToInstance(
            PaginationModel,
            {
                search,
                page,
                numberOfRows,
                columns: destructureColumns,
                sortBy,
                sortOrder,
                filters: destructureFilters
            }
        )


        return await GetUnitListDataSource({ paginationModel, authModel });


    } catch (error) {
        return FailureMapperUtil(error);
    }
}