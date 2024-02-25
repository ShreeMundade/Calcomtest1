import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  appId?: SortOrder;
  bookingId?: SortOrder;
  currency?: SortOrder;
  data?: SortOrder;
  externalId?: SortOrder;
  fee?: SortOrder;
  id?: SortOrder;
  paymentOption?: SortOrder;
  refunded?: SortOrder;
  success?: SortOrder;
  uid?: SortOrder;
};
