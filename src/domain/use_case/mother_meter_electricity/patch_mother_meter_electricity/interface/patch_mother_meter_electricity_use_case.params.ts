import AuthModel from "../../../../../data/model/auth/auth.model"
import MotherMeterElectricityEntity from "../../../../entity/mother_meter/mother_meter_electricity.entity"

export default interface PatchMotherMeterElectricityUseCaseParams {
    authModel: AuthModel
    motherMeterElectricityEntity: MotherMeterElectricityEntity
}