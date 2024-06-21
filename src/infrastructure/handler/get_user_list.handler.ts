import { Response } from 'express';
import PaginationDto from "../../application/dto/pagination.dto";
import ApiGatewayHelperParams from "../../application/interface/api_gateway_helper.params";
import Failure from "../../domain/failure/failure";
import GetUsersListUseCase from "../../domain/use_case/get_user_list/get_user_list.use_case";

export default async function getUserListHandler({ req, res }: ApiGatewayHelperParams): Promise<Response> {
    try {
        const {
            page = 1,
            numberOfRows = 10,
            search = '',
            columns = '',
            sortBy = '',
            sortOrder = '',
            filters = ''
        }: PaginationDto = req.query as any;

        const response = await GetUsersListUseCase({
            page,
            numberOfRows,
            search,
            columns,
            sortBy,
            sortOrder,
            filters
        });

        if (response instanceof Failure) {
            return res.status(response.statusCode).json({ error: response.message });
        }
        return res.status(201).json(response);

    } catch (error) {
        return res.status(500).json(error);
    }
}
