import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppRoutingFormsFormService } from "./appRoutingFormsForm.service";
import { AppRoutingFormsFormControllerBase } from "./base/appRoutingFormsForm.controller.base";

@swagger.ApiTags("appRoutingFormsForms")
@common.Controller("appRoutingFormsForms")
export class AppRoutingFormsFormController extends AppRoutingFormsFormControllerBase {
  constructor(protected readonly service: AppRoutingFormsFormService) {
    super(service);
  }
}
