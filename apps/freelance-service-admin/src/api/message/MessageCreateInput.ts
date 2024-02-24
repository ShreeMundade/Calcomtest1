import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  content: string;
  receiver: UserWhereUniqueInput;
  sender: UserWhereUniqueInput;
};
