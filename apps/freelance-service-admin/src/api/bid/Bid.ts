import { User } from "../user/User";
import { Job } from "../job/Job";

export type Bid = {
  amount: number;
  createdAt: Date;
  freelancer?: User;
  id: number;
  job?: Job;
  proposal: string;
};
