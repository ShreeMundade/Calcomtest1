import { Attendee } from "../attendee/Attendee";
import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";

export type BookingSeat = {
  attendee?: Attendee;
  booking?: Booking;
  data: JsonValue;
  id: number;
  referenceUid: string;
};
