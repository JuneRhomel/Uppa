import ApiGatewayHelperParams from "../../../../application/interface/api_gateway_helper.params";

export default async function GetUserHandler({ usecase }: ApiGatewayHelperParams): Promise<any> {
    const users = await usecase({ database: 'mydatabase', table: 'users' });
    return users;
}