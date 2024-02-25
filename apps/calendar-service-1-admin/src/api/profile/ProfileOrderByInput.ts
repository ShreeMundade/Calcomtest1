import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  movedFromUserId?: SortOrder;
  organizationId?: SortOrder;
  uid?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  username?: SortOrder;
};
