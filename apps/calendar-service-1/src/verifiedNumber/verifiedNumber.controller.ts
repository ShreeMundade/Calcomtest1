import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VerifiedNumberService } from "./verifiedNumber.service";
import { VerifiedNumberControllerBase } from "./base/verifiedNumber.controller.base";

@swagger.ApiTags("verifiedNumbers")
@common.Controller("verifiedNumbers")
export class VerifiedNumberController extends VerifiedNumberControllerBase {
  constructor(protected readonly service: VerifiedNumberService) {
    super(service);
  }
}
