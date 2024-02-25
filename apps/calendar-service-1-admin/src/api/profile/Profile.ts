import { EventType } from "../eventType/EventType";
import { User } from "../user/User";
import { Team } from "../team/Team";

export type Profile = {
  createdAt: Date;
  eventTypes?: Array<EventType>;
  id: number;
  movedFromUser?: User | null;
  organization?: Team;
  uid: string;
  updatedAt: Date;
  user?: User;
  username: string;
};
