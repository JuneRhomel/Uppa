import { validate } from "class-validator";
import RegisterDataSource from "../../../../data/data_source/auth/register/register.data_source";
import RegisterUseCaseParams from "./interface/register_use_case.params";
import ValidationFailure from "../../../failure/common/validation";
import { plainToInstance } from "class-transformer";
import RegisterModel from "../../../../data/model/auth/register.model";
import FailureMapperUtil from "../../../../infrastructure/util/failure_mapper/failure_mapper.util";
const md5 = require('md5');

export default async function RegisterUseCase({ registerEntity, authModel }: RegisterUseCaseParams) {
    try {
        const validationError = await validate(registerEntity)

        if (validationError.length > 0) {
            return new ValidationFailure({ extra: validationError })
        }

        if (registerEntity.password !== registerEntity.confirmPassword) {
            return new ValidationFailure({ extra: ["Password and confirm password does not match"] })
        }
        const securePassword = md5(registerEntity.password)

        const registerModel = new RegisterModel(
            registerEntity.id,
            registerEntity.firstname,
            registerEntity.lastname,
            registerEntity.email,
            securePassword,
            registerEntity.contactNumber,
            0,
            registerEntity.roleId,
            new Date(),
        )

        return await RegisterDataSource({ registerModel, authModel })

    } catch (error) {
        return FailureMapperUtil(error)
    }
}