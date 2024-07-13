import { plainToInstance } from "class-transformer";
import GetDataListDataSource from "../../../../data/data_source/get_data_list/get_data_list.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import PropertyStatusEntity from "../../../entity/unit_status.entity";
import Failure from "../../../failure/failure";
import GetPropertyStatusUseCaseParams from "./interface/get_property_status_use_case";

export default async function GetPropertyStatusUseCase({ authModel }: GetPropertyStatusUseCaseParams): Promise<PropertyStatusEntity | Failure> {
    try {
        const table = "list_unit_status";
        const data = await GetDataListDataSource({ authModel, table });

        const propertyStatuses = plainToInstance(PropertyStatusEntity, data, { excludeExtraneousValues: true });
        return propertyStatuses
    } catch (error) {
        return FailureMapperUtil(error);
    }

}