import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type BidUpdateInput = {
  amount?: number;
  freelancer?: UserWhereUniqueInput;
  job?: JobWhereUniqueInput;
  proposal?: string;
};
