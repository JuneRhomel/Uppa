import AuthModel from "../../../../../data/model/auth/auth.model"
import MotherMeterElectricityEntity from "../../../../entity/mother_meter/mother_meter_electicity.entity"

export default interface PostMotherMeterElectricityUseCaseParams {
    authModel: AuthModel
    motherMeterElectricityEntity: MotherMeterElectricityEntity
}