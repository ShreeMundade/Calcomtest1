import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  createdAt?: DateTimeFilter;
  eventTypes?: EventTypeListRelationFilter;
  id?: IntFilter;
  movedFromUser?: UserWhereUniqueInput;
  organization?: TeamWhereUniqueInput;
  uid?: StringFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
  username?: StringFilter;
};
