import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BookingSeatWhereUniqueInput } from "../bookingSeat/BookingSeatWhereUniqueInput";

export type AttendeeUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  bookingSeat?: BookingSeatWhereUniqueInput | null;
  email?: string;
  locale?: string | null;
  name?: string;
  timeZone?: string;
};
