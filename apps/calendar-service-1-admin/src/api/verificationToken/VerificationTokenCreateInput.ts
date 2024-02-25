import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type VerificationTokenCreateInput = {
  expires: Date;
  expiresInDays?: number | null;
  identifier: string;
  team?: TeamWhereUniqueInput | null;
  token: string;
};
