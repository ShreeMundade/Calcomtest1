import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type InstantMeetingTokenWhereInput = {
  booking?: BookingWhereUniqueInput;
  createdAt?: DateTimeFilter;
  expires?: DateTimeFilter;
  id?: IntFilter;
  team?: TeamWhereUniqueInput;
  token?: StringFilter;
  updatedAt?: DateTimeFilter;
};
