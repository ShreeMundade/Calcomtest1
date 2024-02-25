import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type BookingReferenceCreateInput = {
  booking?: BookingWhereUniqueInput | null;
  credentialId?: number | null;
  deleted?: boolean | null;
  externalCalendarId?: string | null;
  meetingId?: string | null;
  meetingPassword?: string | null;
  meetingUrl?: string | null;
  thirdPartyRecurringEventId?: string | null;
  typeField: string;
  uid: string;
};
