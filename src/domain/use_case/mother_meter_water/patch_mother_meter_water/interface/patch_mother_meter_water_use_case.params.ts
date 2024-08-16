import AuthModel from "../../../../../data/model/auth/auth.model";
import MotherMeterWaterEntity from "../../../../entity/mother_meter/mother_meter_water.entity";

export default interface PatchMotherMeterWaterUseCaseParams {
    authModel: AuthModel,
    motherMeterWaterWaterEntity: MotherMeterWaterEntity
}