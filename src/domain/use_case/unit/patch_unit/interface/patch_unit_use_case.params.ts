
import AuthModel from "../../../../../data/model/auth/auth.model";
import UnitEntity from "../../../../entity/unit.entity";

export default interface PatchUnitUseCaseParams {
    unitEntity: UnitEntity,
    authModel: AuthModel
}