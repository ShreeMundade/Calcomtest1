import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type SkillWhereInput = {
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
};
