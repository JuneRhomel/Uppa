import { validate } from "class-validator";
import FailureMapperUtil from "../../../infrastructure/util/failure_mapper/failure_mapper.util";
import Failure from "../../failure/failure";
import PostUnitUseCase from "./interface/post_unit_use_case.params"
import ValidationFailure from "../../failure/common/validation";
import PostDataDataSource from "../../../data/data_source/post_data/post_data.data_source";

export default async function PostUnitUseCase({ unitEntity, authModel }: PostUnitUseCase): Promise<Failure | void> {
    try {

        const unitErrorValidation = await validate(
            unitEntity
        );
        if (unitErrorValidation.length > 0) {
            return new ValidationFailure({ extra: unitErrorValidation });
        }

        const postUnit = await PostDataDataSource({ authModel, table: "unit", data: unitEntity })
        return postUnit;
    } catch (error) {
        return FailureMapperUtil(error)
    }
}