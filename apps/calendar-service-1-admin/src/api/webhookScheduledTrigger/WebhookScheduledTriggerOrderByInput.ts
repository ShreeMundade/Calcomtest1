import { SortOrder } from "../../util/SortOrder";

export type WebhookScheduledTriggerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jobName?: SortOrder;
  payload?: SortOrder;
  retryCount?: SortOrder;
  startAfter?: SortOrder;
  subscriberUrl?: SortOrder;
};
