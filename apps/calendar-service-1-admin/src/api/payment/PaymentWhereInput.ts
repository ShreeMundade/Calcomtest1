import { IntFilter } from "../../util/IntFilter";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type PaymentWhereInput = {
  amount?: IntFilter;
  appField?: AppModelWhereUniqueInput;
  booking?: BookingWhereUniqueInput;
  currency?: StringFilter;
  data?: JsonFilter;
  externalId?: StringFilter;
  fee?: IntFilter;
  id?: IntFilter;
  paymentOption?: "ON_BOOKING" | "HOLD";
  refunded?: BooleanFilter;
  success?: BooleanFilter;
  uid?: StringFilter;
};
