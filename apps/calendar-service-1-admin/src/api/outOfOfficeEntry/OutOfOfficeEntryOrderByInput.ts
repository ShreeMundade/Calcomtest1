import { SortOrder } from "../../util/SortOrder";

export type OutOfOfficeEntryOrderByInput = {
  createdAt?: SortOrder;
  end?: SortOrder;
  id?: SortOrder;
  start?: SortOrder;
  toUserId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  uuid?: SortOrder;
};
