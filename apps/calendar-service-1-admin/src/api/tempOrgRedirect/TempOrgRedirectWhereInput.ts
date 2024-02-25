import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type TempOrgRedirectWhereInput = {
  createdAt?: DateTimeFilter;
  enabled?: BooleanFilter;
  fromField?: StringFilter;
  fromOrgId?: IntFilter;
  id?: IntFilter;
  toUrl?: StringFilter;
  type?: "UserEventType" | "TeamEventType" | "User" | "Team";
  updatedAt?: DateTimeFilter;
};
