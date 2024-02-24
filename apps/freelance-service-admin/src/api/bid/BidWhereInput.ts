import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BidWhereInput = {
  amount?: FloatFilter;
  createdAt?: DateTimeFilter;
  freelancer?: UserWhereUniqueInput;
  id?: IntFilter;
  job?: JobWhereUniqueInput;
  proposal?: StringFilter;
};
