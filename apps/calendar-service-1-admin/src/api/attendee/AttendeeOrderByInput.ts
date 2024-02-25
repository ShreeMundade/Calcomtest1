import { SortOrder } from "../../util/SortOrder";

export type AttendeeOrderByInput = {
  bookingId?: SortOrder;
  bookingSeatId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  locale?: SortOrder;
  name?: SortOrder;
  timeZone?: SortOrder;
};
