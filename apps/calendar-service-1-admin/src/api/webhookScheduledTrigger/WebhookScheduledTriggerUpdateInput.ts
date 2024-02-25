export type WebhookScheduledTriggerUpdateInput = {
  jobName?: string;
  payload?: string;
  retryCount?: number;
  startAfter?: Date;
  subscriberUrl?: string;
};
