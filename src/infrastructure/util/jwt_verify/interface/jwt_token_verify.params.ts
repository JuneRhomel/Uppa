import { NextFunction, Request, Response } from "express";
import AuthModel from "../../../../data/model/auth/auth.model";


export default interface JwtTokenVerifyParams {
    req: Request;
    res: Response;
    next: NextFunction;

}


declare global {
    namespace Express {
        interface Request {
            userAuth: AuthModel;
        }
    }
}