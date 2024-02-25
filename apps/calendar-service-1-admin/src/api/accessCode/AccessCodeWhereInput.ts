import { OAuthClientWhereUniqueInput } from "../oAuthClient/OAuthClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessCodeWhereInput = {
  client?: OAuthClientWhereUniqueInput;
  code?: StringFilter;
  expiresAt?: DateTimeFilter;
  id?: IntFilter;
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
