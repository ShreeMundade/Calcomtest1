import { Module } from "@nestjs/common";
import { VerifiedNumberModuleBase } from "./base/verifiedNumber.module.base";
import { VerifiedNumberService } from "./verifiedNumber.service";
import { VerifiedNumberController } from "./verifiedNumber.controller";
import { VerifiedNumberResolver } from "./verifiedNumber.resolver";

@Module({
  imports: [VerifiedNumberModuleBase],
  controllers: [VerifiedNumberController],
  providers: [VerifiedNumberService, VerifiedNumberResolver],
  exports: [VerifiedNumberService],
})
export class VerifiedNumberModule {}
