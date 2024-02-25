import { EventType } from "../eventType/EventType";
import { User } from "../user/User";

export type Host = {
  eventType?: EventType;
  id: number;
  isFixed: boolean;
  priority: number | null;
  user?: User;
};
