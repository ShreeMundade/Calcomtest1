import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OAuthClientService } from "./oAuthClient.service";
import { OAuthClientControllerBase } from "./base/oAuthClient.controller.base";

@swagger.ApiTags("oAuthClients")
@common.Controller("oAuthClients")
export class OAuthClientController extends OAuthClientControllerBase {
  constructor(protected readonly service: OAuthClientService) {
    super(service);
  }
}
