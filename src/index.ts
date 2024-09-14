import express = require("express");
import { Application, Request, Response } from "express";
import PostAuthHandler from "./infrastructure/handler/auth/post_auth.handler";
import VerifyToken from "./infrastructure/util/jwt_verify/jwt_token_verify";
<<<<<<< HEAD
import RegisterHandler from "./infrastructure/handler/auth/register.handler";

=======
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
import PatchUnitStatusHandler from "./infrastructure/handler/unit/patch_unit_status.handler";
import DeleteUnitStatusHandler from "./infrastructure/handler/unit/delete_unit_status.handler";
import PatchUnitTypeHandler from "./infrastructure/handler/unit/patch_unit_type.handler";
import GetTenantListHandler from "./infrastructure/handler/tenant/get_tenant_list.handler";
import GetTenantStatusHandler from "./infrastructure/handler/tenant/get_tenant_status.handler";
import PostTenantHandler from "./infrastructure/handler/tenant/post_tenant.handler";
import GetMotherMeterWaterListHandler from "./infrastructure/handler/mother_meter_water/get_mother_meter_water_list.handler";
import GetMotherMeterElectricityHandler from "./infrastructure/handler/mother_meter_electricity/get_mother_meter_electricity_list.handler";
import PostMotherMeterWaterHandler from "./infrastructure/handler/mother_meter_water/post_mother_meter_water.handler";
import PostMotherMeterElectricityHandler from "./infrastructure/handler/mother_meter_electricity/post_mother_meter_electricity.handler";
import GetTenantHandler from "./infrastructure/handler/tenant/get_tenant.handler";
import PatchTenantHandler from "./infrastructure/handler/tenant/patch_tenant.hadler";
import DeleteTenantHandler from "./infrastructure/handler/tenant/delete_tenant.handler";
import GetMotherMeterWaterHandler from "./infrastructure/handler/mother_meter_water/get_mother_meter.handler";
import PatchMotherMeterWaterHandler from "./infrastructure/handler/mother_meter_water/patch_mother_meter_water.handler";
import DeleteMotherMeterWaterHandler from "./infrastructure/handler/mother_meter_water/delete_mother_meter_water.handler";
import PatchMotherMeterElectricityHandler from "./infrastructure/handler/mother_meter_electricity/patch_mother_meter_electricity.handler";
import GetMotherMeterElectricityhandler from "./infrastructure/handler/mother_meter_electricity/get_mother_meter_electricity.handler";
import DeleteMotherMeterElectricityHandler from "./infrastructure/handler/mother_meter_electricity/delete_mother_meter_electricity.handler";
import DeleteSubMeterElectricityHandler from "./infrastructure/handler/sub_meter_electricity/delete_sub_meter_electricity.handler";
import GetSubMeterElectricityHandler from "./infrastructure/handler/sub_meter_electricity/get_sub_meter_electricity.handler";
import PatchSubMeterElectricityHandler from "./infrastructure/handler/sub_meter_electricity/patch_sub_meter_electricity.handler";
import PostSubMeterElectricityHandler from "./infrastructure/handler/sub_meter_electricity/post_sub_meter_electricity.handler";
>>>>>>> parent of 8112fcb (crude sub meter)
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

<<<<<<< HEAD
=======
app.get("/sub/meter/electricity", async (req: Request, res: Response) => {
  await GetSubMeterElectricityHandler({ req, res });
});

app.post("/sub/meter/electricity", async (req: Request, res: Response) => {
  await PostSubMeterElectricityHandler({ req, res });
});

app.patch("/sub/meter/electricity/:id", async (req: Request, res: Response) => {
  await PatchSubMeterElectricityHandler({ req, res });
});

app.get("/sub/meter/electricity/:id", async (req: Request, res: Response) => {
  await GetSubMeterElectricityHandler({ req, res });
});

app.delete("/sub/meter/electricity/:id", async (req: Request, res: Response) => {
  await DeleteSubMeterElectricityHandler({ req, res });
});

>>>>>>> parent of 8112fcb (crude sub meter)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
