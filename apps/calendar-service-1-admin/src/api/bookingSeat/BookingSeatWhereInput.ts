import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookingSeatWhereInput = {
  attendee?: AttendeeWhereUniqueInput;
  booking?: BookingWhereUniqueInput;
  data?: JsonFilter;
  id?: IntFilter;
  referenceUid?: StringFilter;
};
