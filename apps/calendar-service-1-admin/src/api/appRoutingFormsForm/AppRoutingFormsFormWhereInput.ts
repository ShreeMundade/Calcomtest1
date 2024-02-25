import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { AppRoutingFormsFormResponseListRelationFilter } from "../appRoutingFormsFormResponse/AppRoutingFormsFormResponseListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppRoutingFormsFormWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  disabled?: BooleanFilter;
  fields?: JsonFilter;
  id?: StringFilter;
  name?: StringFilter;
  position?: IntFilter;
  responses?: AppRoutingFormsFormResponseListRelationFilter;
  routes?: JsonFilter;
  settings?: JsonFilter;
  team?: TeamWhereUniqueInput;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
