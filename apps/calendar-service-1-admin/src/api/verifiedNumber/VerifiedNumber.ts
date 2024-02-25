import { Team } from "../team/Team";
import { User } from "../user/User";

export type VerifiedNumber = {
  id: number;
  phoneNumber: string;
  team?: Team | null;
  user?: User | null;
};
