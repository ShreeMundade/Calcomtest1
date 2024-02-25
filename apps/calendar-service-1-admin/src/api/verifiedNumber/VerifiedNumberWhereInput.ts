import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerifiedNumberWhereInput = {
  id?: IntFilter;
  phoneNumber?: StringFilter;
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
