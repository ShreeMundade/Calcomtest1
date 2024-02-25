import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type AvatarWhereInput = {
  data?: StringFilter;
  id?: StringFilter;
  teamId?: IntFilter;
  userId?: IntFilter;
};
