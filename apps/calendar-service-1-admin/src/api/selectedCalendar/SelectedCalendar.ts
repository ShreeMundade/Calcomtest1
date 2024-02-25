import { Credential } from "../credential/Credential";
import { User } from "../user/User";

export type SelectedCalendar = {
  credential?: Credential | null;
  externalId: string;
  id: number;
  integration: string;
  user?: User;
};
