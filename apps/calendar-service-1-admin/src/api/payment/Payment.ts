import { AppModel } from "../appModel/AppModel";
import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";

export type Payment = {
  amount: number;
  appField?: AppModel | null;
  booking?: Booking | null;
  currency: string;
  data: JsonValue;
  externalId: string;
  fee: number;
  id: number;
  paymentOption?: "ON_BOOKING" | "HOLD" | null;
  refunded: boolean;
  success: boolean;
  uid: string;
};
