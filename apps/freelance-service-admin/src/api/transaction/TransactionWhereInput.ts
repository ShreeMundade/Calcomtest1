import { FloatFilter } from "../../util/FloatFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TransactionWhereInput = {
  amount?: FloatFilter;
  client?: UserWhereUniqueInput;
  freelancer?: UserWhereUniqueInput;
  id?: IntFilter;
  job?: JobWhereUniqueInput;
  transactionDate?: DateTimeFilter;
};
