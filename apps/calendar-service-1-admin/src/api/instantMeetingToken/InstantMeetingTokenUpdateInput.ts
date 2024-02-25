import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type InstantMeetingTokenUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  expires?: Date;
  team?: TeamWhereUniqueInput;
  token?: string;
};
