import { Module } from "@nestjs/common";
import { AccessCodeModuleBase } from "./base/accessCode.module.base";
import { AccessCodeService } from "./accessCode.service";
import { AccessCodeController } from "./accessCode.controller";
import { AccessCodeResolver } from "./accessCode.resolver";

@Module({
  imports: [AccessCodeModuleBase],
  controllers: [AccessCodeController],
  providers: [AccessCodeService, AccessCodeResolver],
  exports: [AccessCodeService],
})
export class AccessCodeModule {}
