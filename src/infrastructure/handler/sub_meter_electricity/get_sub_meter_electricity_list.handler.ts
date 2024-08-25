import { plainToInstance } from "class-transformer";
import { Response } from "express";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params"
import AuthModel from "../../../data/model/auth/auth.model"
import GetSubMeterElectricityListUseCase from "../../../domain/use_case/sub_meter_electricity/get_sub_meter_electricity_list/get_sub_meter_electricity_list.use_case"
import PaginationEntity from "../../../domain/entity/pagination/panigation.entity";
import PaginationDto from "../../../application/dto/pagination.dto";

export default async function GetSubMeterElectricityListHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
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

        const paginationEntity = plainToInstance(
            PaginationEntity,
            getListPagination,
            {
                excludeExtraneousValues: true,
            }
        );

        const authModelInfo = {
            userId: req.userAuth.userId,
            email: req.userAuth.email,
            accountCode: req.userAuth.accountCode,
            token: req.userAuth.token
        }
        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true
        })

        const result = await GetSubMeterElectricityListUseCase({ authModel, paginationEntity })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json(error)
    }
}