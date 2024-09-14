import RegisterDto from "../../../application/dto/register.dto";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params"
import RegisterEntity from "../../../domain/entity/auth/register.entity";
import { plainToInstance } from "class-transformer";
import RegisterUseCase from "../../../domain/use_case/auth/register/register.use_case";
import Failure from "../../../domain/failure/failure";

export default async function RegisterHandler({ req, res }: ApiGatewayHelperParams) {
    try {

        const data = req.body as RegisterDto;

        const registerEntity = plainToInstance(RegisterEntity, data, {
            excludeExtraneousValues: true
        })

        const authModel = req.userAuth

        const responseRegisterUseCase = await RegisterUseCase({
            registerEntity,
            authModel
        })

        if (responseRegisterUseCase instanceof Failure) {
            return res.status(400).json(responseRegisterUseCase);
        }

        return res.status(201).json("Success");



    } catch (error) {
        return res.status(500).json(error);
    }
}