import { Module } from "@nestjs/common";
import { WebhookScheduledTriggerModuleBase } from "./base/webhookScheduledTrigger.module.base";
import { WebhookScheduledTriggerService } from "./webhookScheduledTrigger.service";
import { WebhookScheduledTriggerController } from "./webhookScheduledTrigger.controller";
import { WebhookScheduledTriggerResolver } from "./webhookScheduledTrigger.resolver";

@Module({
  imports: [WebhookScheduledTriggerModuleBase],
  controllers: [WebhookScheduledTriggerController],
  providers: [WebhookScheduledTriggerService, WebhookScheduledTriggerResolver],
  exports: [WebhookScheduledTriggerService],
})
export class WebhookScheduledTriggerModule {}
