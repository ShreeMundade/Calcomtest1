import { AppModel } from "../appModel/AppModel";
import { EventType } from "../eventType/EventType";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type Webhook = {
  active: boolean;
  appField?: AppModel | null;
  createdAt: Date;
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
  eventType?: EventType | null;
  id: string;
  payloadTemplate: string | null;
  secret: string | null;
  subscriberUrl: string;
  team?: Team | null;
  user?: User | null;
};
