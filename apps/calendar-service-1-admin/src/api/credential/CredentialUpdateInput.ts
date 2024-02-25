import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { CalendarCacheUpdateManyWithoutCredentialsInput } from "./CalendarCacheUpdateManyWithoutCredentialsInput";
import { DestinationCalendarUpdateManyWithoutCredentialsInput } from "./DestinationCalendarUpdateManyWithoutCredentialsInput";
import { InputJsonValue } from "../../types";
import { SelectedCalendarUpdateManyWithoutCredentialsInput } from "./SelectedCalendarUpdateManyWithoutCredentialsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialUpdateInput = {
  appField?: AppModelWhereUniqueInput | null;
  billingCycleStart?: number | null;
  calendarCache?: CalendarCacheUpdateManyWithoutCredentialsInput;
  destinationCalendars?: DestinationCalendarUpdateManyWithoutCredentialsInput;
  invalid?: boolean | null;
  key?: InputJsonValue;
  paymentStatus?: string | null;
  selectedCalendars?: SelectedCalendarUpdateManyWithoutCredentialsInput;
  subscriptionId?: string | null;
  team?: TeamWhereUniqueInput | null;
  typeField?: string;
  user?: UserWhereUniqueInput | null;
};
