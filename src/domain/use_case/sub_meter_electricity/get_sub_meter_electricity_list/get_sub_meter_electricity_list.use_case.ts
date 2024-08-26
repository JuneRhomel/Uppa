import { plainToInstance } from "class-transformer"
import GetSubMeterElectricityListDataSource from "../../../../data/data_source/sub_meter_electricity/get_sub_meter_electricity_list/get_sub_meter_electricity_list.data_source"
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util"
import GetSubMeterElectricityListEntity from "../../../entity/sub_meter/sub_meter_electricity_list.entity"
import Failure from "../../../failure/failure"
import PaginationModel from "../../../../data/model/panigation/panigation.model"
import GetSubMeterElectricityListUseCaseParams from "./interface/get_sub_meter_electricity_list_use_case.params"
import GetTotalListRowsDataSource from "../../../../data/data_source/core/get_total_list_rows/get_total_list_rows.data_source"
import SubMeterElectricityEntity from "../../../entity/sub_meter/sub_meter_electricity.entity"
import SubMeterElectricityListEntity from "../../../entity/sub_meter/sub_meter_electricity_list.entity"

export default async function GetSubMeterElectricityListUseCase({ authModel, paginationEntity }: GetSubMeterElectricityListUseCaseParams): Promise<Failure | GetSubMeterElectricityListEntity> {
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

        const [totalRows, subMeterElectricity] = await Promise.all([
            GetTotalListRowsDataSource({ database: authModel.accountCode, table: "sub_meter_water" }),
            GetSubMeterElectricityListDataSource({ paginationModel, authModel }),
        ])

        if (totalRows instanceof Failure) return totalRows;
        if (subMeterElectricity instanceof Failure) return subMeterElectricity;

        const subMeterElectricityEntity = plainToInstance(SubMeterElectricityEntity, subMeterElectricity, {
            excludeExtraneousValues: true
        })

        return new SubMeterElectricityListEntity(subMeterElectricityEntity, totalRows)

    } catch (error) {
        return FailureMapperUtil(error)
    }
}