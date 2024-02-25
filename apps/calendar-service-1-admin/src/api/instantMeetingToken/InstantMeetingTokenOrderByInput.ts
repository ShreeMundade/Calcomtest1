import { SortOrder } from "../../util/SortOrder";

export type InstantMeetingTokenOrderByInput = {
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  expires?: SortOrder;
  id?: SortOrder;
  teamId?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
