import JwtRefreshTokenParams from "./interface/jtw_refresh_token_util.interface";
import Failure from "../../../domain/failure/failure";
import FailureMapperUtil from "../failure_mapper/failure_mapper.util";
const { JWTSECRETKEY } = require('../../config/config');

const jwt = require("jsonwebtoken");
export default async function JwtRefreshToken({ userId, email, accountCode }: JwtRefreshTokenParams) {
    try {
        let token = "";
        token = jwt.sign(
            {
                userId,
                email,
                accountCode
            },
            JWTSECRETKEY
        );

        return token
    } catch (error) {
        return FailureMapperUtil(error)
    }
}