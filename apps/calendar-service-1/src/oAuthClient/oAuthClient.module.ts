import { Module } from "@nestjs/common";
import { OAuthClientModuleBase } from "./base/oAuthClient.module.base";
import { OAuthClientService } from "./oAuthClient.service";
import { OAuthClientController } from "./oAuthClient.controller";
import { OAuthClientResolver } from "./oAuthClient.resolver";

@Module({
  imports: [OAuthClientModuleBase],
  controllers: [OAuthClientController],
  providers: [OAuthClientService, OAuthClientResolver],
  exports: [OAuthClientService],
})
export class OAuthClientModule {}
