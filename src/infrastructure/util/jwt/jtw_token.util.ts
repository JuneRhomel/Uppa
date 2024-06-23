import Failure from "../../../domain/failure/failure";
import JwtTokenParams from "./interface/jtw_token_util.interface";
const { JWTSECRETKEY } = require('../../config/config');

const jwt = require("jsonwebtoken");

export default async function JtwToken({ userId, email, accountCode }: JwtTokenParams): Promise<string | Failure> {
    try {
        let token = "";
        token = jwt.sign(
            {
                userId,
                email,
                accountCode
            },
            JWTSECRETKEY,
            { expiresIn: "1h" }
        );

        return token
    } catch (error) {
        return new Failure("Failed to generate token", error, 500)
    }
} 