import { EventTypeUpdateManyWithoutProfilesInput } from "./EventTypeUpdateManyWithoutProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProfileUpdateInput = {
  eventTypes?: EventTypeUpdateManyWithoutProfilesInput;
  movedFromUser?: UserWhereUniqueInput | null;
  organization?: TeamWhereUniqueInput;
  uid?: string;
  user?: UserWhereUniqueInput;
  username?: string;
};
