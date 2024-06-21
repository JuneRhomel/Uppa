import express = require('express');
const bodyParser = require('body-parser');
import { Request, Response } from 'express';
import GetUserListHandler from './infrastructure/handler/get_user_list.handler';
import DeleteUserHadler from './infrastructure/handler/delete_user.handler';
import GetUserHandler from './infrastructure/handler/get_user.handler';
import PostUserHandler from './infrastructure/handler/post_user.handler';
import PatchUserHandler from './infrastructure/handler/patch_user.handler';

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());


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
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
