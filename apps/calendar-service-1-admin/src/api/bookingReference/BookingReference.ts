import { Booking } from "../booking/Booking";

export type BookingReference = {
  booking?: Booking | null;
  credentialId: number | null;
  deleted: boolean | null;
  externalCalendarId: string | null;
  id: number;
  meetingId: string | null;
  meetingPassword: string | null;
  meetingUrl: string | null;
  thirdPartyRecurringEventId: string | null;
  typeField: string;
  uid: string;
};
