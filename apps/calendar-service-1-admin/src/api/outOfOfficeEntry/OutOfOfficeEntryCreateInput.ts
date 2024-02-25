import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OutOfOfficeEntryCreateInput = {
  end: Date;
  start: Date;
  toUser?: UserWhereUniqueInput | null;
  user: UserWhereUniqueInput;
  uuid: string;
};
