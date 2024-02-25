import { WebhookScheduledTrigger as TWebhookScheduledTrigger } from "../api/webhookScheduledTrigger/WebhookScheduledTrigger";

export const WEBHOOKSCHEDULEDTRIGGER_TITLE_FIELD = "jobName";

export const WebhookScheduledTriggerTitle = (
  record: TWebhookScheduledTrigger
): string => {
  return record.jobName?.toString() || String(record.id);
};
