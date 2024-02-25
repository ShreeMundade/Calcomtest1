import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccessCodeService } from "./accessCode.service";
import { AccessCodeControllerBase } from "./base/accessCode.controller.base";

@swagger.ApiTags("accessCodes")
@common.Controller("accessCodes")
export class AccessCodeController extends AccessCodeControllerBase {
  constructor(protected readonly service: AccessCodeService) {
    super(service);
  }
}
