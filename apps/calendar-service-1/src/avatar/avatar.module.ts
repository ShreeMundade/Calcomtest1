import { Module } from "@nestjs/common";
import { AvatarModuleBase } from "./base/avatar.module.base";
import { AvatarService } from "./avatar.service";
import { AvatarController } from "./avatar.controller";
import { AvatarResolver } from "./avatar.resolver";

@Module({
  imports: [AvatarModuleBase],
  controllers: [AvatarController],
  providers: [AvatarService, AvatarResolver],
  exports: [AvatarService],
})
export class AvatarModule {}
