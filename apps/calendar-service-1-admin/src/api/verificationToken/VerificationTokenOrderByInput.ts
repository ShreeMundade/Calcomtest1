import { SortOrder } from "../../util/SortOrder";

export type VerificationTokenOrderByInput = {
  createdAt?: SortOrder;
  expires?: SortOrder;
  expiresInDays?: SortOrder;
  id?: SortOrder;
  identifier?: SortOrder;
  teamId?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
