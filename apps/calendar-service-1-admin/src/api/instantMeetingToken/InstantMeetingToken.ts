import { Booking } from "../booking/Booking";
import { Team } from "../team/Team";

export type InstantMeetingToken = {
  booking?: Booking | null;
  createdAt: Date;
  expires: Date;
  id: number;
  team?: Team;
  token: string;
  updatedAt: Date;
};
