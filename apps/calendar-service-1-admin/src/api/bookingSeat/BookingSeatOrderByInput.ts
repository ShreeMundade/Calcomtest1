import { SortOrder } from "../../util/SortOrder";

export type BookingSeatOrderByInput = {
  attendeeId?: SortOrder;
  bookingId?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  referenceUid?: SortOrder;
};
