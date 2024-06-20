import express from 'express';
import ApiHandlerDependency from "./interface/api_handler.dependency";
import ApiHandlerInterface from "./interface/api_handler.interface";

const app = express();
export default function ApiHandler({ getUsersUseCase }: ApiHandlerDependency): ApiHandlerInterface {
    return async ({ req, res }) => {
        if (req.method === 'GET' && req.url === '/users') {
            return { status: 201,body: 'Success'};
        }
        if (req.method === 'GET' && req.url === '/users/{id}') {
            return { status: 201,body: 'Success'};
        }

        return { status: 404,body: 'Not found'};
    }
}