import { NextFunction,Request, Response } from "express";


export default interface JwtTokenVerifyParams {
    req: Request;
    res: Response;
    next: NextFunction;

}


declare global {
    namespace Express {
        interface Request {
            userAuth?: any; 
        }
    }
}