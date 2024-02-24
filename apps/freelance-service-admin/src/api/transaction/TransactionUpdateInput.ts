import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number;
  client?: UserWhereUniqueInput;
  freelancer?: UserWhereUniqueInput;
  job?: JobWhereUniqueInput;
};
