import { SortOrder } from "../../util/SortOrder";

export type SelectedSlotOrderByInput = {
  eventTypeId?: SortOrder;
  id?: SortOrder;
  isSeat?: SortOrder;
  releaseAt?: SortOrder;
  slotUtcEndDate?: SortOrder;
  slotUtcStartDate?: SortOrder;
  uid?: SortOrder;
  userId?: SortOrder;
};
