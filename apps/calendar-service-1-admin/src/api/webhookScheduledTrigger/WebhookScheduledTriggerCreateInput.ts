export type WebhookScheduledTriggerCreateInput = {
  jobName: string;
  payload: string;
  retryCount: number;
  startAfter: Date;
  subscriberUrl: string;
};
