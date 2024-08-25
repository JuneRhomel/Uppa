import AuthModel from "../../../../model/auth/auth.model"
import MotherMeterElectricityModel from "../../../../model/mother_meter/mother_meter_electricity.model"

export default interface PatchMotherMeterElectricityDataSourceParams {
    authModel: AuthModel
    motherMeterElectricityModel: MotherMeterElectricityModel
}