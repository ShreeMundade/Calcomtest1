import { Module } from "@nestjs/common";
import { TempOrgRedirectModuleBase } from "./base/tempOrgRedirect.module.base";
import { TempOrgRedirectService } from "./tempOrgRedirect.service";
import { TempOrgRedirectController } from "./tempOrgRedirect.controller";
import { TempOrgRedirectResolver } from "./tempOrgRedirect.resolver";

@Module({
  imports: [TempOrgRedirectModuleBase],
  controllers: [TempOrgRedirectController],
  providers: [TempOrgRedirectService, TempOrgRedirectResolver],
  exports: [TempOrgRedirectService],
})
export class TempOrgRedirectModule {}
