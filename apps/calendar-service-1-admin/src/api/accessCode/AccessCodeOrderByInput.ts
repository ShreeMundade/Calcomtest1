import { SortOrder } from "../../util/SortOrder";

export type AccessCodeOrderByInput = {
  clientId?: SortOrder;
  code?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  scopes?: SortOrder;
  teamId?: SortOrder;
  userId?: SortOrder;
};
