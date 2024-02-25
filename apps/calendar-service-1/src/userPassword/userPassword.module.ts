import { Module } from "@nestjs/common";
import { UserPasswordModuleBase } from "./base/userPassword.module.base";
import { UserPasswordService } from "./userPassword.service";
import { UserPasswordController } from "./userPassword.controller";
import { UserPasswordResolver } from "./userPassword.resolver";

@Module({
  imports: [UserPasswordModuleBase],
  controllers: [UserPasswordController],
  providers: [UserPasswordService, UserPasswordResolver],
  exports: [UserPasswordService],
})
export class UserPasswordModule {}
