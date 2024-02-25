import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPasswordCreateInput = {
  hash: string;
  user: UserWhereUniqueInput;
};
