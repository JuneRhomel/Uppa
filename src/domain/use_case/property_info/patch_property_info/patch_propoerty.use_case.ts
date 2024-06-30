import { validate } from "class-validator";
import PatchDataDataSource from "../../../../data/data_source/patch_data/patch_data.data_source";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import ValidationFailure from "../../../failure/common/validation";
import Failure from "../../../failure/failure";
import PatchropertyUseCaseParams from "./interface/patch_property_use_case.params";

export default async function PatchPropertyInfoUseCase({ propertyInfoEntity, authModel }: PatchropertyUseCaseParams): Promise<void | Failure> {
    try {
        const propertyInfoErrorValidation = await validate(
            propertyInfoEntity
        );

        if (propertyInfoErrorValidation.length > 0) {
            return new ValidationFailure({ extra: propertyInfoErrorValidation });
        }

        const postPropertyInfo = await PatchDataDataSource({ authModel, table: 'property_info', data: propertyInfoEntity });
        
        return postPropertyInfo;


    } catch (error) {
        return FailureMapperUtil(error)
    }
}