import { Request, Response } from 'express';
export default interface ApiGatewayHelperParams {
  req: Request;
  res: Response;
}
