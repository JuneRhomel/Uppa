import { validate } from "class-validator";
import GetPropertyInfoUseCaseParams from "./interface/post_property_info_use_case.params";
import ValidationFailure from "../../../failure/common/validation";
import Failure from "../../../failure/failure";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
import PostDataDataSource from "../../../../data/data_source/post_data/post_data.data_source";

export default async function PostPropertyInfoUseCase({ authModel, propertyInfoEntity }: GetPropertyInfoUseCaseParams): Promise<void | Failure> {

    try {
        const propertyInfoErrorValidation = await validate(
            propertyInfoEntity
        );
        if (propertyInfoErrorValidation.length > 0) {
            return new ValidationFailure({ extra: propertyInfoErrorValidation });
        }
        

        const postPropertyInfo = await PostDataDataSource({ authModel, table: 'property_info', data: propertyInfoEntity });
        return postPropertyInfo;
    } catch (error) {
        return FailureMapperUtil(error);
    }
}