import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPasswordUpdateInput = {
  hash?: string;
  user?: UserWhereUniqueInput;
};
