import { AwilixContainer, asFunction } from "awilix";
import ApiHandler from "../handler/api/api.handler";

export default function RegisterHandler(container: AwilixContainer) {
  container.register({
    apiHandler: asFunction(ApiHandler),
  });
}
