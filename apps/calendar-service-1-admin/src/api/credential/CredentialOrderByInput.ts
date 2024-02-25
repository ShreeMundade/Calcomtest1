import { SortOrder } from "../../util/SortOrder";

export type CredentialOrderByInput = {
  appId?: SortOrder;
  billingCycleStart?: SortOrder;
  id?: SortOrder;
  invalid?: SortOrder;
  key?: SortOrder;
  paymentStatus?: SortOrder;
  subscriptionId?: SortOrder;
  teamId?: SortOrder;
  typeField?: SortOrder;
  userId?: SortOrder;
};
