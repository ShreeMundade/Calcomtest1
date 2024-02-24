import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  bids?: BidListRelationFilter;
  bio?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: IntFilter;
  jobs?: JobListRelationFilter;
  location?: StringNullableFilter;
  password?: StringFilter;
  profileImage?: StringNullableFilter;
  receivedMessages?: MessageListRelationFilter;
  reviewsAsClient?: ReviewListRelationFilter;
  reviewsAsFreelancer?: ReviewListRelationFilter;
  role?: "CLIENT" | "FREELANCER";
  sentMessages?: MessageListRelationFilter;
  transactionsAsClient?: TransactionListRelationFilter;
  transactionsAsFreelancer?: TransactionListRelationFilter;
  username?: StringFilter;
};
