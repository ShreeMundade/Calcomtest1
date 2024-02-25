import { Team } from "../team/Team";

export type VerificationToken = {
  createdAt: Date;
  expires: Date;
  expiresInDays: number | null;
  id: number;
  identifier: string;
  team?: Team | null;
  token: string;
  updatedAt: Date;
};
