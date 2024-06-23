import express = require('express');
import { Request, Response } from 'express';
import GetUserListHandler from './infrastructure/handler/user/get_user_list.handler';
import DeleteUserHadler from './infrastructure/handler/user/delete_user.handler';
import GetUserHandler from './infrastructure/handler/user/get_user.handler';
import PostUserHandler from './infrastructure/handler/user/post_user.handler';
import PatchUserHandler from './infrastructure/handler/user/patch_user.handler';
import PostAuthHandler from './infrastructure/handler/auth/post_auth.handler';
import VerifyToken from './infrastructure/util/jwt_verify/jwt_token_verify';
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

app.get('/users', async (req: Request, res: Response) => {
    await GetUserListHandler({ req, res });
});

app.delete('/users/:id', async (req: Request, res: Response) => {
    await DeleteUserHadler({ req, res });
})

app.get('/users/:id', async (req: Request, res: Response) => {
    await GetUserHandler({ req, res });

})

app.post('/users', async (req: Request, res: Response) => {
    await PostUserHandler({ req, res });
})

app.patch('/users/:id', async (req: Request, res: Response) => {
    await PatchUserHandler({ req, res });
})

app.post('/auth', async (req: Request, res: Response) => {
    await PostAuthHandler({ req, res });
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
