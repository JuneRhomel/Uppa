import PropertyInfoDto from "../../../application/dto/property_info.dto";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import { Response } from "express"
import { plainToInstance } from "class-transformer";
import PropertyInfoEntity from "../../../domain/entity/property_info/property_info.entity";
import AuthModel from "../../../data/model/auth/auth.model";
import PatchPropertyInfoUseCas from "../../../domain/use_case/property_info/patch_property_info/patch_propoerty.use_case";
import Failure from "../../../domain/failure/failure";


export default async function PathcPropertyInfoHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body = req.body as PropertyInfoDto;
        const propertyInfo = {
            property_name: body.property_name,
            location: body.location,
            tin: body.tin,
            logo: body.logo
        }

        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token
        }


        const propertyInfoEntity = plainToInstance(
            PropertyInfoEntity,
            propertyInfo,
            {
                excludeExtraneousValues: true,
            }
        )
        const authModel = plainToInstance(
            AuthModel,
            authModelInfo,
            {
                excludeExtraneousValues: true,
            }
        )

        const response = await PatchPropertyInfoUseCas({
            propertyInfoEntity,
            authModel
        })


        if (response instanceof Failure) {
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}