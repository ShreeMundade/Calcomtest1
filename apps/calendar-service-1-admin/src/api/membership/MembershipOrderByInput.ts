import { SortOrder } from "../../util/SortOrder";

export type MembershipOrderByInput = {
  accepted?: SortOrder;
  disableImpersonation?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  teamId?: SortOrder;
  userId?: SortOrder;
};
