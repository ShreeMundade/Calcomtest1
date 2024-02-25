import { UserPasswordWhereUniqueInput } from "./UserPasswordWhereUniqueInput";
import { UserPasswordUpdateInput } from "./UserPasswordUpdateInput";

export type UpdateUserPasswordArgs = {
  where: UserPasswordWhereUniqueInput;
  data: UserPasswordUpdateInput;
};
