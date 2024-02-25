import * as graphql from "@nestjs/graphql";
import { WebhookScheduledTriggerResolverBase } from "./base/webhookScheduledTrigger.resolver.base";
import { WebhookScheduledTrigger } from "./base/WebhookScheduledTrigger";
import { WebhookScheduledTriggerService } from "./webhookScheduledTrigger.service";

@graphql.Resolver(() => WebhookScheduledTrigger)
export class WebhookScheduledTriggerResolver extends WebhookScheduledTriggerResolverBase {
  constructor(protected readonly service: WebhookScheduledTriggerService) {
    super(service);
  }
}
