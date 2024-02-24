import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type TransactionCreateInput = {
  amount: number;
  client: UserWhereUniqueInput;
  freelancer: UserWhereUniqueInput;
  job: JobWhereUniqueInput;
};
