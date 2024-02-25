import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OutOfOfficeEntryWhereInput = {
  createdAt?: DateTimeFilter;
  end?: DateTimeFilter;
  id?: IntFilter;
  start?: DateTimeFilter;
  toUser?: UserWhereUniqueInput;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
  uuid?: StringFilter;
};
