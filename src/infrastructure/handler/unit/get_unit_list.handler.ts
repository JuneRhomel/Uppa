import PaginationDto from "../../../application/dto/pagination.dto";
import { Response } from "express";
import { plainToInstance } from "class-transformer";
import PaginationEntity from "../../../domain/entity/pagination/panigation.entity";
import AuthModel from "../../../data/model/auth/auth.model";
import GetUnitListUseCase from "../../../domain/use_case/unit/get_unit_list/get_unit_list.use_case";
import Failure from "../../../domain/failure/failure";
import ApiGatewayHelperParams from "../../../application/interface/api_gateway_helper.params";

export default async function GetUnitListHandler({
  req,
  res,
}: ApiGatewayHelperParams): Promise<Response> {
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
    const response = await GetUnitListUseCase({ paginationEntity, authModel });

    if (response instanceof Failure) {
      return res.status(400).json(response);
    }

    return res.status(201).json(response);
  } catch (error) {
    return res.sendStatus(500);
  }
}
