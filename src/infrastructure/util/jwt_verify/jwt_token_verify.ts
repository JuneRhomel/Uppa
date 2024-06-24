import JwtTokenVerifyParams from './interface/jwt_token_verify.params';
import { Response, NextFunction } from 'express';

const jwt = require("jsonwebtoken")
const { JWTSECRETKEY } = require('../../config/config');

export default async function VerifyToken({ req, res, next }: JwtTokenVerifyParams): Promise<Response | void> {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.sendStatus(403);
        }

        const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, JWTSECRETKEY, (err: any, decoded: any) => {
            if (err) {
                return res.sendStatus(403);
            } else {
                req.userAuth = decoded;
                next();
            }
        });

    } catch (error) {

        return res.sendStatus(500);
    }
}