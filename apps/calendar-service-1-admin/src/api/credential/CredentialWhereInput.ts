import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CalendarCacheListRelationFilter } from "../calendarCache/CalendarCacheListRelationFilter";
import { DestinationCalendarListRelationFilter } from "../destinationCalendar/DestinationCalendarListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SelectedCalendarListRelationFilter } from "../selectedCalendar/SelectedCalendarListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialWhereInput = {
  appField?: AppModelWhereUniqueInput;
  billingCycleStart?: IntNullableFilter;
  calendarCache?: CalendarCacheListRelationFilter;
  destinationCalendars?: DestinationCalendarListRelationFilter;
  id?: IntFilter;
  invalid?: BooleanNullableFilter;
  key?: JsonFilter;
  paymentStatus?: StringNullableFilter;
  selectedCalendars?: SelectedCalendarListRelationFilter;
  subscriptionId?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
  typeField?: StringFilter;
  user?: UserWhereUniqueInput;
};
