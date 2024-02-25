export type WebhookScheduledTrigger = {
  createdAt: Date | null;
  id: number;
  jobName: string;
  payload: string;
  retryCount: number;
  startAfter: Date;
  subscriberUrl: string;
};
