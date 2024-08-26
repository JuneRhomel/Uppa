import { plainToInstance } from "class-transformer";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import GetSubMeterWaterListUseCaseParams from "./interface/get_sub_meter_water_list_use_case";
import PaginationModel from "../../../../data/model/panigation/panigation.model";
import GetSubMeterWaterListDataSource from "../../../../data/data_source/sub_meter_water/get_sub_meter_water_list/get_sub_meter_water_list.data_source";
import Failure from "../../../failure/failure";
import GetTotalListRowsDataSource from "../../../../data/data_source/core/get_total_list_rows/get_total_list_rows.data_source";
import SubMeterWaterEntity from "../../../entity/sub_meter/sub_meter_water.entity";
import SubMeterWaterListEntity from "../../../entity/sub_meter/sub_meter_water_list.entity";

export default async function GetSubMeterWaterListUseCase({
  authModel,
  paginationEntity,
}: GetSubMeterWaterListUseCaseParams) {
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


    const [totalRows, subMeterWater] = await Promise.all([
      GetTotalListRowsDataSource({ database: authModel.accountCode, table: "sub_meter_water" }),
      GetSubMeterWaterListDataSource({ paginationModel, authModel }),
    ])

    if (totalRows instanceof Failure) return totalRows;
    if (subMeterWater instanceof Failure) return subMeterWater;

    const subMeterWaterEntity = plainToInstance(SubMeterWaterEntity, subMeterWater, {
      excludeExtraneousValues: true
    })

    return new SubMeterWaterListEntity(subMeterWaterEntity, totalRows)
  } catch (error) {

    return FailureMapperUtil(error);

  }
}
