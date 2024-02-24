import { Bid } from "../bid/Bid";
import { User } from "../user/User";
import { Review } from "../review/Review";
import { Transaction } from "../transaction/Transaction";

export type Job = {
  bids?: Array<Bid>;
  budget: number;
  client?: User;
  createdAt: Date;
  description: string;
  id: number;
  reviews?: Array<Review>;
  title: string;
  transactions?: Array<Transaction>;
};
