import GetTotalListRowsDataSource from "../../../../data/data_source/core/get_total_list_rows/get_total_list_rows.data_source"
import GetMotherMeterWaterListDataSource from "../../../../data/data_source/mother_meter_water/get_mother_meter_water_list/get_mother_meter_list_water.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import MotherMeterWaterListEntity from "../../../entity/mother_meter/mother_meter_water_list.entity";
import { plainToInstance } from "class-transformer";
import Failure from "../../../failure/failure";
import GetMotherMeterWaterListUseCaseParams from "./interface/mother_meter_water_use_case.params";
import MotherMeterWaterEntity from "../../../entity/mother_meter/mother_meter_water.entity";
import PaginationModel from "../../../../data/model/panigation/panigation.model";

export default async function GetMotherMeterWaterListUseCase({ paginationEntity, authModel }: GetMotherMeterWaterListUseCaseParams): Promise<Failure | MotherMeterWaterListEntity> {
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

        const [totalRows, motherMeterWaterEntity] = await Promise.all([
            GetTotalListRowsDataSource({ database: authModel.accountCode, table: "mother_meter_water" }),
            GetMotherMeterWaterListDataSource({ paginationModel, authModel }),
        ])
        if (totalRows instanceof Failure) return totalRows
        if (motherMeterWaterEntity instanceof Failure) return motherMeterWaterEntity

        const motherMeterEntity = plainToInstance(MotherMeterWaterEntity, motherMeterWaterEntity, {
            excludeExtraneousValues: true
        })

        return new MotherMeterWaterListEntity(motherMeterEntity, totalRows)
    } catch (error) {
        return FailureMapperUtil(error)
    }
}