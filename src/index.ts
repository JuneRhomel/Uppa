import express = require("express");
import { Request, Response } from "express";
import PostAuthHandler from "./infrastructure/handler/auth/post_auth.handler";
import VerifyToken from "./infrastructure/util/jwt_verify/jwt_token_verify";
import PostPropertyInfoHandler from "./infrastructure/handler/property_info/post_property_info.handler";
import PostUnitHandler from "./infrastructure/handler/unit/post_unit.handler";
import GetUnitListHandler from "./infrastructure/handler/unit/get_unit_list.handler";
import GetUnitHandler from "./infrastructure/handler/unit/get_unit.handler";
import PatchUnitHandler from "./infrastructure/handler/unit/patch_unit.handler";
import DeleteUnitHandler from "./infrastructure/handler/unit/delete_unit.handler";
import PostRegisterHandler from "./infrastructure/handler/register/post_register.handler";
import PathcPropertyInfoHandler from "./infrastructure/handler/property_info/patch_property_info.handler";
import GetUnitTypeHandler from "./infrastructure/handler/unit/get_unit_type.handler";
import GetUnitStatusHandler from "./infrastructure/handler/unit/get_unit_status.handler";
const cors = require("cors");
const { PORT } = require("./infrastructure/config/config");

const bodyParser = require("body-parser");
const app = express();
const port = PORT || 3000;
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.url !== "/auth") {
    await VerifyToken({ req, res, next });
  } else {
    next();
  }
});

app.post("/auth", async (req: Request, res: Response) => {
  await PostAuthHandler({ req, res });
});
// Property
app.post("/propertyinfo", async (req: Request, res: Response) => {
  await PostPropertyInfoHandler({ req, res });
});
app.patch("/propertyinfo", async (req: Request, res: Response) => {
  await PathcPropertyInfoHandler({ req, res });
});

app.post("/unit", async (req: Request, res: Response) => {
  await PostUnitHandler({ req, res });
});
app.get("/unit", async (req: Request, res: Response) => {
  await GetUnitListHandler({ req, res });
});
app.get("/unit/:id", async (req: Request, res: Response) => {
  await GetUnitHandler({ req, res });
});
app.patch("/unit/:id", async (req: Request, res: Response) => {
  await PatchUnitHandler({ req, res });
});
app.delete("/unit/:id", async (req: Request, res: Response) => {
  await DeleteUnitHandler({ req, res });
});

app.post("/register", async (req: Request, res: Response) => {
  await PostRegisterHandler({ req, res });
});
app.get("/unit-types", async (req: Request, res: Response) => {
  await GetUnitTypeHandler({ req, res });
});

app.get("/unit-status", async (req: Request, res: Response) => {
  await GetUnitStatusHandler({ req, res });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
