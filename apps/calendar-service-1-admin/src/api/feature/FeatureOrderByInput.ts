import { SortOrder } from "../../util/SortOrder";

export type FeatureOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  lastUsedAt?: SortOrder;
  stale?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
};
