import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type VerificationTokenUpdateInput = {
  expires?: Date;
  expiresInDays?: number | null;
  identifier?: string;
  team?: TeamWhereUniqueInput | null;
  token?: string;
};
