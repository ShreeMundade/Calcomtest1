import { User } from "../user/User";
import { Job } from "../job/Job";

export type Transaction = {
  amount: number;
  client?: User;
  freelancer?: User;
  id: number;
  job?: Job;
  transactionDate: Date;
};
