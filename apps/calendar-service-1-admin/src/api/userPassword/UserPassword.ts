import { User } from "../user/User";

export type UserPassword = {
  hash: string;
  id: number;
  user?: User;
};
