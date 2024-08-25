import express = require("express");
import { Application, Request, Response } from "express";
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

app.patch("/unit-status/:id", async (req: Request, res: Response) => {
  await PatchUnitStatusHandler({ req, res });
});
app.delete("/unit-status/:id", async (req: Request, res: Response) => {
  await DeleteUnitStatusHandler({ req, res });
});
app.patch("/unit-types/:id", async (req: Request, res: Response) => {
  await PatchUnitTypeHandler({ req, res });
});

app.get("/tenant", async (req: Request, res: Response) => {
  await GetTenantListHandler({ req, res });
});

app.get("/tenant/:id", async (req: Request, res: Response) => {
  await GetTenantHandler({ req, res });
});

app.patch("/tenant/:id", async (req: Request, res: Response) => {
  await PatchTenantHandler({ req, res });
});

app.delete("/tenant/:id", async (req: Request, res: Response) => {
  await DeleteTenantHandler({ req, res });
});

app.get("/tenant-status", async (req: Request, res: Response) => {
  await GetTenantStatusHandler({ req, res });
});

app.post("/tenant", async (req: Request, res: Response) => {
  await PostTenantHandler({ req, res });
});

app.get("/mother/meter/water", async (req: Request, res: Response) => {
  await GetMotherMeterWaterListHandler({ req, res });
});

app.post("/mother/meter/water", async (req: Request, res: Response) => {
  await PostMotherMeterWaterHandler({ req, res });
});

app.get("/mother/meter/water/:id", async (req: Request, res: Response) => {
  await GetMotherMeterWaterHandler({ req, res });
});

app.patch("/mother/meter/water/:id", async (req: Request, res: Response) => {
  await PatchMotherMeterWaterHandler({ req, res });
});

app.delete("/mother/meter/water/:id", async (req: Request, res: Response) => {
  await DeleteMotherMeterWaterHandler({ req, res });
});

app.get("/mother/meter/electricity", async (req: Request, res: Response) => {
  await GetMotherMeterElectricityHandler({ req, res });
});

app.post("/mother/meter/electricity", async (req: Request, res: Response) => {
  await PostMotherMeterElectricityHandler({ req, res });
});

app.patch("/mother/meter/electricity/:id", async (req: Request, res: Response) => {
  await PatchMotherMeterElectricityHandler({ req, res });
});

app.get("/mother/meter/electricity/:id", async (req: Request, res: Response) => {
  await GetMotherMeterElectricityhandler({ req, res });
});

app.delete("/mother/meter/electricity/:id", async (req: Request, res: Response) => {
  await DeleteMotherMeterElectricityHandler({ req, res });
})

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
