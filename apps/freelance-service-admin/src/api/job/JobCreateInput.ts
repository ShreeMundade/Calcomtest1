import { BidCreateNestedManyWithoutJobsInput } from "./BidCreateNestedManyWithoutJobsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReviewCreateNestedManyWithoutJobsInput } from "./ReviewCreateNestedManyWithoutJobsInput";
import { TransactionCreateNestedManyWithoutJobsInput } from "./TransactionCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  bids?: BidCreateNestedManyWithoutJobsInput;
  budget: number;
  client: UserWhereUniqueInput;
  description: string;
  reviews?: ReviewCreateNestedManyWithoutJobsInput;
  title: string;
  transactions?: TransactionCreateNestedManyWithoutJobsInput;
};
