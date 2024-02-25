import { AppModel } from "../appModel/AppModel";
import { CalendarCache } from "../calendarCache/CalendarCache";
import { DestinationCalendar } from "../destinationCalendar/DestinationCalendar";
import { JsonValue } from "type-fest";
import { SelectedCalendar } from "../selectedCalendar/SelectedCalendar";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type Credential = {
  appField?: AppModel | null;
  billingCycleStart: number | null;
  calendarCache?: Array<CalendarCache>;
  destinationCalendars?: Array<DestinationCalendar>;
  id: number;
  invalid: boolean | null;
  key: JsonValue;
  paymentStatus: string | null;
  selectedCalendars?: Array<SelectedCalendar>;
  subscriptionId: string | null;
  team?: Team | null;
  typeField: string;
  user?: User | null;
};
