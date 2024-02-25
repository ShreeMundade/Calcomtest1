import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPasswordWhereInput = {
  hash?: StringFilter;
  id?: IntFilter;
  user?: UserWhereUniqueInput;
};
