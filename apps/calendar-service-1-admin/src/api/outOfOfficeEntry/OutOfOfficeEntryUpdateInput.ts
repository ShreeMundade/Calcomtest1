import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OutOfOfficeEntryUpdateInput = {
  end?: Date;
  start?: Date;
  toUser?: UserWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
  uuid?: string;
};
