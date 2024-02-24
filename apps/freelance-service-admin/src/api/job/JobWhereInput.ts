import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type JobWhereInput = {
  bids?: BidListRelationFilter;
  budget?: FloatFilter;
  client?: UserWhereUniqueInput;
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  id?: IntFilter;
  reviews?: ReviewListRelationFilter;
  title?: StringFilter;
  transactions?: TransactionListRelationFilter;
};
