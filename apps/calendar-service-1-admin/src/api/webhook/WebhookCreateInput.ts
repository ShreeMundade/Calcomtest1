import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebhookCreateInput = {
  active: boolean;
  appField?: AppModelWhereUniqueInput | null;
  eventTriggers?: Array<
    | "BOOKING_CREATED"
    | "BOOKING_PAYMENT_INITIATED"
    | "BOOKING_PAID"
    | "BOOKING_RESCHEDULED"
    | "BOOKING_REQUESTED"
    | "BOOKING_CANCELLED"
    | "BOOKING_REJECTED"
    | "FORM_SUBMITTED"
    | "MEETING_ENDED"
    | "MEETING_STARTED"
    | "RECORDING_READY"
    | "INSTANT_MEETING"
  >;
  eventType?: EventTypeWhereUniqueInput | null;
  payloadTemplate?: string | null;
  secret?: string | null;
  subscriberUrl: string;
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
