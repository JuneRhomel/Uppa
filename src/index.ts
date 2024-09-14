import express = require("express");
import { Application, Request, Response } from "express";
import PostAuthHandler from "./infrastructure/handler/auth/post_auth.handler";
import VerifyToken from "./infrastructure/util/jwt_verify/jwt_token_verify";
import RegisterHandler from "./infrastructure/handler/auth/register.handler";

const { PORT } = require("./infrastructure/config/config");

const cors = require("cors");
const bodyParser = require("body-parser");

const app: Application = express();
const port = PORT || 3000;

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  if (req.url !== "/auth") {
    VerifyToken({ req, res, next });
  } else {
    next();
  }
});


app.post("/auth", async (req: Request, res: Response) => {
  await PostAuthHandler({ req, res });
});

app.post("/register", async (req: Request, res: Response) => {
  await RegisterHandler({ req, res });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
