import AuthModel from "../../../data/model/user_models/auth.model";
import Failure from "../../../domain/failure/failure";
import JwtTokenParams from "./interface/jtw_token_util.interface";
const jwt = require("jsonwebtoken");

export default async function JtwToken({ userId, email, accountCode }: JwtTokenParams): Promise<AuthModel | Failure> {
    try {
        let token;
        token = jwt.sign(
            {
                userId,
                email,
                accountCode
            },
            "secretkeyappearshere",
            { expiresIn: "1h" }
        );

        return {
            userId,
            email,
            accountCode,
            token
        }

    } catch (error) {
        return new Failure("Failed to generate token", error, 500)
    }
} 