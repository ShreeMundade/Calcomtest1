import { Module } from "@nestjs/common";
import { AppRoutingFormsFormResponseModuleBase } from "./base/appRoutingFormsFormResponse.module.base";
import { AppRoutingFormsFormResponseService } from "./appRoutingFormsFormResponse.service";
import { AppRoutingFormsFormResponseController } from "./appRoutingFormsFormResponse.controller";
import { AppRoutingFormsFormResponseResolver } from "./appRoutingFormsFormResponse.resolver";

@Module({
  imports: [AppRoutingFormsFormResponseModuleBase],
  controllers: [AppRoutingFormsFormResponseController],
  providers: [
    AppRoutingFormsFormResponseService,
    AppRoutingFormsFormResponseResolver,
  ],
  exports: [AppRoutingFormsFormResponseService],
})
export class AppRoutingFormsFormResponseModule {}
