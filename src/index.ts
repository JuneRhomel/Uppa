import express = require('express');
import { Request, Response } from 'express';
import PostAuthHandler from './infrastructure/handler/auth/post_auth.handler';
import VerifyToken from './infrastructure/util/jwt_verify/jwt_token_verify';
import PostPropertyInfoHandler from './infrastructure/handler/property_info/post_property_info.handler';
import PostUnitHandler from './infrastructure/handler/unit/post_unit.handler';
import GetUnitHandler from './infrastructure/handler/unit/get_unit.handler';
const { PORT } = require('./infrastructure/config/config');

const bodyParser = require('body-parser');
const app = express();
const port = PORT || 3000;
app.use(bodyParser.json());

app.use(async function (req, res, next) {
    if (req.url !== '/auth') {
        await VerifyToken({ req, res, next })
    } else {
        next()
    }
})

app.post('/auth', async (req: Request, res: Response) => {
    await PostAuthHandler({ req, res });
})

app.post("/propertyinfo", async (req: Request, res: Response) => {
    await PostPropertyInfoHandler({ req, res });
})

app.post("/unit", async (req: Request, res: Response) => {
    await PostUnitHandler({ req, res });
})
app.get("/unit", async (req: Request, res: Response) => {
    await GetUnitHandler({ req, res });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
