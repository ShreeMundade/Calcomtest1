import { Booking } from "../booking/Booking";
import { Credential } from "../credential/Credential";
import { EventType } from "../eventType/EventType";
import { User } from "../user/User";

export type DestinationCalendar = {
  booking?: Array<Booking>;
  credential?: Credential | null;
  eventType?: EventType | null;
  externalId: string;
  id: number;
  integration: string;
  primaryEmail: string | null;
  user?: User | null;
};
