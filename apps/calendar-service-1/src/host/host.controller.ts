import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HostService } from "./host.service";
import { HostControllerBase } from "./base/host.controller.base";

@swagger.ApiTags("hosts")
@common.Controller("hosts")
export class HostController extends HostControllerBase {
  constructor(protected readonly service: HostService) {
    super(service);
  }
}
