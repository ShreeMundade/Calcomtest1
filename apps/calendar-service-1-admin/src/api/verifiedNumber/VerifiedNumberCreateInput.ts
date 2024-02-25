import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerifiedNumberCreateInput = {
  phoneNumber: string;
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
