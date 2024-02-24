import { User } from "../user/User";
import { Job } from "../job/Job";

export type Review = {
  client?: User;
  content: string;
  createdAt: Date;
  freelancer?: User;
  id: number;
  job?: Job;
  rating: number;
};
