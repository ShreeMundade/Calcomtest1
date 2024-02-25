import { Booking } from "../booking/Booking";
import { BookingSeat } from "../bookingSeat/BookingSeat";

export type Attendee = {
  booking?: Booking | null;
  bookingSeat?: BookingSeat | null;
  email: string;
  id: number;
  locale: string | null;
  name: string;
  timeZone: string;
};
