import { BidUpdateManyWithoutJobsInput } from "./BidUpdateManyWithoutJobsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReviewUpdateManyWithoutJobsInput } from "./ReviewUpdateManyWithoutJobsInput";
import { TransactionUpdateManyWithoutJobsInput } from "./TransactionUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  bids?: BidUpdateManyWithoutJobsInput;
  budget?: number;
  client?: UserWhereUniqueInput;
  description?: string;
  reviews?: ReviewUpdateManyWithoutJobsInput;
  title?: string;
  transactions?: TransactionUpdateManyWithoutJobsInput;
};
