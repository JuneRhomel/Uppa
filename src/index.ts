import express from 'express';
import ApiHandlerInterface from './infrastructure/handler/api/interface/api_handler.interface';
import Injection from './infrastructure/dependency_injection/injection';

const injection = Injection();
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3000;
app.use(async (req, res) => {
    console.log(req, req.url);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const apiHandler: ApiHandlerInterface = injection.resolve("apiHandler");
    const responce = await apiHandler({ req, res });
    res.statusCode = responce.status;
    res.send(responce.body);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});