import { SortOrder } from "../../util/SortOrder";

export type BookingReferenceOrderByInput = {
  bookingId?: SortOrder;
  credentialId?: SortOrder;
  deleted?: SortOrder;
  externalCalendarId?: SortOrder;
  id?: SortOrder;
  meetingId?: SortOrder;
  meetingPassword?: SortOrder;
  meetingUrl?: SortOrder;
  thirdPartyRecurringEventId?: SortOrder;
  typeField?: SortOrder;
  uid?: SortOrder;
};
