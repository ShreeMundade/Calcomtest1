import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeatureWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  enabled?: BooleanFilter;
  id?: StringFilter;
  lastUsedAt?: DateTimeNullableFilter;
  stale?: BooleanNullableFilter;
  type?:
    | "RELEASE"
    | "EXPERIMENT"
    | "OPERATIONAL"
    | "KILL_SWITCH"
    | "PERMISSION";
  updatedAt?: DateTimeNullableFilter;
  updatedBy?: IntNullableFilter;
};
