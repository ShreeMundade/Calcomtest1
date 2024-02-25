import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { CalendarCacheCreateNestedManyWithoutCredentialsInput } from "./CalendarCacheCreateNestedManyWithoutCredentialsInput";
import { DestinationCalendarCreateNestedManyWithoutCredentialsInput } from "./DestinationCalendarCreateNestedManyWithoutCredentialsInput";
import { InputJsonValue } from "../../types";
import { SelectedCalendarCreateNestedManyWithoutCredentialsInput } from "./SelectedCalendarCreateNestedManyWithoutCredentialsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialCreateInput = {
  appField?: AppModelWhereUniqueInput | null;
  billingCycleStart?: number | null;
  calendarCache?: CalendarCacheCreateNestedManyWithoutCredentialsInput;
  destinationCalendars?: DestinationCalendarCreateNestedManyWithoutCredentialsInput;
  invalid?: boolean | null;
  key: InputJsonValue;
  paymentStatus?: string | null;
  selectedCalendars?: SelectedCalendarCreateNestedManyWithoutCredentialsInput;
  subscriptionId?: string | null;
  team?: TeamWhereUniqueInput | null;
  typeField: string;
  user?: UserWhereUniqueInput | null;
};
