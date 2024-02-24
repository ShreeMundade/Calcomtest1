import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string;
  receiver?: UserWhereUniqueInput;
  sender?: UserWhereUniqueInput;
};
