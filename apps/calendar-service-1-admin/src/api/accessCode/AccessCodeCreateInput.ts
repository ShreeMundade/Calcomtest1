import { OAuthClientWhereUniqueInput } from "../oAuthClient/OAuthClientWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessCodeCreateInput = {
  client?: OAuthClientWhereUniqueInput | null;
  code: string;
  expiresAt: Date;
  scopes?: Array<"READ_BOOKING" | "READ_PROFILE">;
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
