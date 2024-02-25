import { BookingCreateNestedManyWithoutDestinationCalendarsInput } from "./BookingCreateNestedManyWithoutDestinationCalendarsInput";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DestinationCalendarCreateInput = {
  booking?: BookingCreateNestedManyWithoutDestinationCalendarsInput;
  credential?: CredentialWhereUniqueInput | null;
  eventType?: EventTypeWhereUniqueInput | null;
  externalId: string;
  integration: string;
  primaryEmail?: string | null;
  user?: UserWhereUniqueInput | null;
};
