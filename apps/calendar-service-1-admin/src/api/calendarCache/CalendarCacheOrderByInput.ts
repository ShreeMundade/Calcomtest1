import { SortOrder } from "../../util/SortOrder";

export type CalendarCacheOrderByInput = {
  credentialId?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  value?: SortOrder;
};
