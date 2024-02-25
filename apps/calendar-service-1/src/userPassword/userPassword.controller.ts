import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserPasswordService } from "./userPassword.service";
import { UserPasswordControllerBase } from "./base/userPassword.controller.base";

@swagger.ApiTags("userPasswords")
@common.Controller("userPasswords")
export class UserPasswordController extends UserPasswordControllerBase {
  constructor(protected readonly service: UserPasswordService) {
    super(service);
  }
}
