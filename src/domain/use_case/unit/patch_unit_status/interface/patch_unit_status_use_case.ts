import AuthModel from "../../../../../data/model/auth/auth.model";
import UnitStatusEntity from "../../../../entity/unit/unit_status.entity";

export default interface PatchUnitStatusUseCaseParams {
    authModel: AuthModel
    unitStatusEntity: UnitStatusEntity
}