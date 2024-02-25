import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppRoutingFormsFormResponseService } from "./appRoutingFormsFormResponse.service";
import { AppRoutingFormsFormResponseControllerBase } from "./base/appRoutingFormsFormResponse.controller.base";

@swagger.ApiTags("appRoutingFormsFormResponses")
@common.Controller("appRoutingFormsFormResponses")
export class AppRoutingFormsFormResponseController extends AppRoutingFormsFormResponseControllerBase {
  constructor(protected readonly service: AppRoutingFormsFormResponseService) {
    super(service);
  }
}
