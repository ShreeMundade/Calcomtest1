import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type MessageWhereInput = {
  content?: StringFilter;
  id?: IntFilter;
  receiver?: UserWhereUniqueInput;
  sender?: UserWhereUniqueInput;
  sentAt?: DateTimeFilter;
};
