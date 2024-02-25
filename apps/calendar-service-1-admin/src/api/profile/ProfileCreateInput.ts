import { EventTypeCreateNestedManyWithoutProfilesInput } from "./EventTypeCreateNestedManyWithoutProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProfileCreateInput = {
  eventTypes?: EventTypeCreateNestedManyWithoutProfilesInput;
  movedFromUser?: UserWhereUniqueInput | null;
  organization: TeamWhereUniqueInput;
  uid: string;
  user: UserWhereUniqueInput;
  username: string;
};
