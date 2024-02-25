import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PaymentCreateInput = {
  amount: number;
  appField?: AppModelWhereUniqueInput | null;
  booking?: BookingWhereUniqueInput | null;
  currency: string;
  data: InputJsonValue;
  externalId: string;
  fee: number;
  paymentOption?: "ON_BOOKING" | "HOLD" | null;
  refunded: boolean;
  success: boolean;
  uid: string;
};
