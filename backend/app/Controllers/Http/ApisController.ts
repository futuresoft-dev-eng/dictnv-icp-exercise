import { Response, Request } from 'express';

export default class ApisController {
  static async health(request: Request, response: Response) {
    return (response.send().statusCode = 204);
  }
}
