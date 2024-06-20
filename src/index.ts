import express = require('express');
import { Request, Response } from 'express';
import GetUserListHandler from './infrastructure/handler/get_user_list.handler';
import Failure from './domain/failure/failure';
import DeleteUserHadler from './infrastructure/handler/delete_user.handler';
import GetUserHandler from './infrastructure/handler/get_user.handler';

const app = express();
const port = process.env.PORT || 3000;

app.get('/users', async (req: Request, res: Response) => {
    const response = await GetUserListHandler({ req, res });
    if (response instanceof Failure) {
        res.status(response.statusCode).send(response.message);
    }
    res.status(201).send(response);
});

app.delete('/users/:id', async (req: Request, res: Response) => {
    const response = await DeleteUserHadler({ req, res });
    if (response instanceof Failure) {
        res.status(response.statusCode).send(response.message);
    }
    res.status(201).send(response);
})

app.get('/users/:id', async (req: Request, res: Response) => {
    const response = await GetUserHandler({ req, res });
    if (response instanceof Failure) {
        res.status(response.statusCode).send(response.message);
    }
    res.status(201).send(response);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
