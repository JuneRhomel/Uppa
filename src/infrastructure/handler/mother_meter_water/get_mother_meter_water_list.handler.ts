import PaginationDto from "../../../application/dto/pagination.dto";
import { Response } from "express";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";
import PaginationEntity from "../../../domain/entity/pagination/panigation.entity";
import { plainToInstance } from "class-transformer";
import GetMotherMeterWaterListUseCase from "../../../domain/use_case/mother_meter_water/get_mother_meter_water_list/mother_meter_water_list.use_case";
import Failure from "../../../domain/failure/failure";
import AuthModel from "../../../data/model/auth/auth.model";
export default async function GetMotherMeterWaterListHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
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
            token: req.userAuth.token,
        };

        const paginationEntity = plainToInstance(
            PaginationEntity,
            getListPagination,
            {
                excludeExtraneousValues: true,
            }
        );
        const authModel = plainToInstance(AuthModel, authModelInfo, {
            excludeExtraneousValues: true,
        });


        const response = await GetMotherMeterWaterListUseCase({ paginationEntity, authModel });

        if (response instanceof Failure) {
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }

}