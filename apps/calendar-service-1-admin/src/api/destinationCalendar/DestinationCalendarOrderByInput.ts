import { SortOrder } from "../../util/SortOrder";

export type DestinationCalendarOrderByInput = {
  credentialId?: SortOrder;
  eventTypeId?: SortOrder;
  externalId?: SortOrder;
  id?: SortOrder;
  integration?: SortOrder;
  primaryEmail?: SortOrder;
  userId?: SortOrder;
};
