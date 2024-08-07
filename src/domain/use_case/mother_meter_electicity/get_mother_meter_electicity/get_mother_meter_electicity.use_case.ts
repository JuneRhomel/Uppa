import GetTotalListRowsDataSource from "../../../../data/data_source/core/get_total_list_rows/get_total_list_rows.data_source";
import GetMotherMeterElectricityDataSource from "../../../../data/data_source/mother_meter_electricity/get_mother_meter_electricity/get_mother_meter_electicity.data_source";
import PaginationModel from "../../../../data/model/panigation/panigation.model";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import MotherMeterElectricityEntity from "../../../entity/mother_meter/mother_meter_electicity.entity";
import MotherMeterElectricityListEntity from "../../../entity/mother_meter/mother_meter_electicity_list.entity";
import Failure from "../../../failure/failure";
import GetMotherMeterElectricityUseCaseParams from "./interface/get_mother_meter_electicity_use_case.params";
import { plainToInstance } from "class-transformer";

export default async function GetMotherMeterElectricityUseCase({ authModel, paginationEntity }: GetMotherMeterElectricityUseCaseParams): Promise<Failure | MotherMeterElectricityListEntity> {
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

        const [motherMeterElectricity, totalRows] = await Promise.all([
            GetMotherMeterElectricityDataSource({ authModel, paginationModel }),
            GetTotalListRowsDataSource({ database: authModel.accountCode, table: "mother_meter_electricity" })
        ])

        if (totalRows instanceof Failure) return totalRows
        if (motherMeterElectricity instanceof Failure) return motherMeterElectricity

        const motherMeterElectricityEntity = plainToInstance(MotherMeterElectricityEntity, motherMeterElectricity, {
            excludeExtraneousValues: true
        })

        return new MotherMeterElectricityListEntity(motherMeterElectricityEntity, totalRows)

    } catch (error) {
        return FailureMapperUtil(error)
    }

}