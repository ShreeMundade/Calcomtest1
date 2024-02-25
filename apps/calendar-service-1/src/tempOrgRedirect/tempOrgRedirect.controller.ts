import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TempOrgRedirectService } from "./tempOrgRedirect.service";
import { TempOrgRedirectControllerBase } from "./base/tempOrgRedirect.controller.base";

@swagger.ApiTags("tempOrgRedirects")
@common.Controller("tempOrgRedirects")
export class TempOrgRedirectController extends TempOrgRedirectControllerBase {
  constructor(protected readonly service: TempOrgRedirectService) {
    super(service);
  }
}
