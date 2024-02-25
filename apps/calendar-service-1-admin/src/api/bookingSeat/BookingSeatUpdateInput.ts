import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type BookingSeatUpdateInput = {
  attendee?: AttendeeWhereUniqueInput;
  booking?: BookingWhereUniqueInput;
  data?: InputJsonValue;
  referenceUid?: string;
};
