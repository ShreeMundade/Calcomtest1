import { Module } from "@nestjs/common";
import { AppRoutingFormsFormModuleBase } from "./base/appRoutingFormsForm.module.base";
import { AppRoutingFormsFormService } from "./appRoutingFormsForm.service";
import { AppRoutingFormsFormController } from "./appRoutingFormsForm.controller";
import { AppRoutingFormsFormResolver } from "./appRoutingFormsForm.resolver";

@Module({
  imports: [AppRoutingFormsFormModuleBase],
  controllers: [AppRoutingFormsFormController],
  providers: [AppRoutingFormsFormService, AppRoutingFormsFormResolver],
  exports: [AppRoutingFormsFormService],
})
export class AppRoutingFormsFormModule {}
