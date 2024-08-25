import { plainToInstance } from "class-transformer";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import GetMotherMeterElectricityUseCase from "../../../domain/use_case/mother_meter_electricity/get_mother_meter_electricity/get_mother_meter_electricity.use_case";

export default async function GetMotherMeterElectricityhandler({ req, res }: ApiGatewayHelperParams) {
    try {
        const id = parseInt(req.params.id);
        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token,
        };
        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true,
        });

        const result = await GetMotherMeterElectricityUseCase({
            authModel,
            id
        });

        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json(error);
    }
}