import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebhookScheduledTriggerService } from "./webhookScheduledTrigger.service";
import { WebhookScheduledTriggerControllerBase } from "./base/webhookScheduledTrigger.controller.base";

@swagger.ApiTags("webhookScheduledTriggers")
@common.Controller("webhookScheduledTriggers")
export class WebhookScheduledTriggerController extends WebhookScheduledTriggerControllerBase {
  constructor(protected readonly service: WebhookScheduledTriggerService) {
    super(service);
  }
}
