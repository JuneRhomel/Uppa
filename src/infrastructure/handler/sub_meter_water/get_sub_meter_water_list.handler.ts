import { Response } from "express";
import { plainToInstance } from "class-transformer";
import PaginationDto from "../../../application/dto/pagination.dto";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import AuthModel from "../../../data/model/auth/auth.model";
import PaginationEntity from "../../../domain/entity/pagination/panigation.entity";
import GetSubMeterWaterListUseCase from "../../../domain/use_case/sub_meter_water/get_sub_meter_water_list/get_sub_meter_water_list.use_case";


export default async function GerSubMeterWaterListHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const body: PaginationDto = req.query as any;

        
        const getListPagination = {
            search: body.search || "",
            page: parseInt(body.page) || 1,
            numberOfRows: parseInt(body.numberOfRows) || 10,
            columns: body.columns,
            sortBy: body.sortBy,
            sortOrder: body.sortOrder,
            filters: body.filters,
        };


        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token
        }

        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true
        })
        const paginationEntity = plainToInstance(
            PaginationEntity,
            body,
            {
                excludeExtraneousValues: true,
            }
        );

        const result = await GetSubMeterWaterListUseCase({ authModel, paginationEntity })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json(error)
    }
}