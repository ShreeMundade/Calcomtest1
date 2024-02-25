import { OAuthClient } from "../oAuthClient/OAuthClient";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type AccessCode = {
  client?: OAuthClient | null;
  code: string;
  expiresAt: Date;
  id: number;
  scopes?: Array<"READ_BOOKING" | "READ_PROFILE">;
  team?: Team | null;
  user?: User | null;
};
