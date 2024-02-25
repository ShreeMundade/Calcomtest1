import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type VerificationTokenWhereInput = {
  createdAt?: DateTimeFilter;
  expires?: DateTimeFilter;
  expiresInDays?: IntNullableFilter;
  id?: IntFilter;
  identifier?: StringFilter;
  team?: TeamWhereUniqueInput;
  token?: StringFilter;
  updatedAt?: DateTimeFilter;
};
