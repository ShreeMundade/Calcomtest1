import { Module } from "@nestjs/common";
import { InstantMeetingTokenModuleBase } from "./base/instantMeetingToken.module.base";
import { InstantMeetingTokenService } from "./instantMeetingToken.service";
import { InstantMeetingTokenController } from "./instantMeetingToken.controller";
import { InstantMeetingTokenResolver } from "./instantMeetingToken.resolver";

@Module({
  imports: [InstantMeetingTokenModuleBase],
  controllers: [InstantMeetingTokenController],
  providers: [InstantMeetingTokenService, InstantMeetingTokenResolver],
  exports: [InstantMeetingTokenService],
})
export class InstantMeetingTokenModule {}
