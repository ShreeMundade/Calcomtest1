import { SortOrder } from "../../util/SortOrder";

export type SelectedCalendarOrderByInput = {
  credentialId?: SortOrder;
  externalId?: SortOrder;
  id?: SortOrder;
  integration?: SortOrder;
  userId?: SortOrder;
};
