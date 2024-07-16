import AuthModel from "../../../../../data/model/auth/auth.model";
import UnitTypeEntity from "../../../../entity/unit_type.entity";

export default interface PatchUnitTypeUseCaseParams {
  authModel: AuthModel;
  unitTypeEntity: UnitTypeEntity;
}
