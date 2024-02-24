import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ReviewWhereInput = {
  client?: UserWhereUniqueInput;
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  freelancer?: UserWhereUniqueInput;
  id?: IntFilter;
  job?: JobWhereUniqueInput;
  rating?: IntFilter;
};
