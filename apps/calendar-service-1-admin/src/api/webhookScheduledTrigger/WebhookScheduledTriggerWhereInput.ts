import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type WebhookScheduledTriggerWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: IntFilter;
  jobName?: StringFilter;
  payload?: StringFilter;
  retryCount?: IntFilter;
  startAfter?: DateTimeFilter;
  subscriberUrl?: StringFilter;
};
