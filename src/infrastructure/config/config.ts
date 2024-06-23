
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    JWTSECRETKEY: process.env.JWT_TOKEN_KEY,
    URL: process.env.URL,
    DB_HOST: process.env.DB_HOST,
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB
    
};