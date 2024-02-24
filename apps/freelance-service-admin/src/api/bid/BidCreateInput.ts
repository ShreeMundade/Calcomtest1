import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type BidCreateInput = {
  amount: number;
  freelancer: UserWhereUniqueInput;
  job: JobWhereUniqueInput;
  proposal: string;
};
