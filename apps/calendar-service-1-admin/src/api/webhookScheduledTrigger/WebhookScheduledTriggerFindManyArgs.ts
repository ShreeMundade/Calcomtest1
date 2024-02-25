import { WebhookScheduledTriggerWhereInput } from "./WebhookScheduledTriggerWhereInput";
import { WebhookScheduledTriggerOrderByInput } from "./WebhookScheduledTriggerOrderByInput";

export type WebhookScheduledTriggerFindManyArgs = {
  where?: WebhookScheduledTriggerWhereInput;
  orderBy?: Array<WebhookScheduledTriggerOrderByInput>;
  skip?: number;
  take?: number;
};
