import GetUnitListDataSource from "../../../../data/data_source/unit/get_unit_list/get_unit_list.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import { plainToInstance } from "class-transformer";

import Failure from "../../../failure/failure";
import GetUnitUseCaseParams from "./interface/get_unit_list_use_case.params";
import PaginationModel from "../../../../data/model/panigation/panigation.model";
import GetTotalListRowsDataSource from "../../../../data/data_source/core/get_total_list_rows/get_total_list_rows.data_source";
import GetUnitListEntity from "../../../entity/unit/get_unit_list.entiry";
import UnitEntity from "../../../entity/unit/unit.entity";

export default async function GetUnitListUseCase({
  paginationEntity,
  authModel,
}: GetUnitUseCaseParams): Promise<GetUnitListEntity | Failure> {
  try {
    const { search, filters, page, numberOfRows, columns, sortBy, sortOrder } =
      paginationEntity;
    const destructureColumns = columns ? columns.split(",") : [];
    const destructureFilters = filters ? filters.split(",") : [];

    const paginationModel = plainToInstance(PaginationModel, {
      search,
      page,
      numberOfRows,
      columns: destructureColumns,
      sortBy,
      sortOrder,
      filters: destructureFilters,
    });
    const totalRows = await GetTotalListRowsDataSource({
      database: authModel.accountCode,
      table: "unit",
    });
    const unit = await GetUnitListDataSource({ paginationModel, authModel });

    if (totalRows instanceof Failure) {
      return totalRows;
    }
    
    if (unit instanceof Failure) {
        return unit;
    }
    const unitEntity = plainToInstance(UnitEntity, unit,{
        excludeExtraneousValues: true,
    });

    return new GetUnitListEntity(unitEntity, totalRows);
  } catch (error) {
    return FailureMapperUtil(error);
  }
}
