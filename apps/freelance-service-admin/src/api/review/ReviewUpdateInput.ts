import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ReviewUpdateInput = {
  client?: UserWhereUniqueInput;
  content?: string;
  freelancer?: UserWhereUniqueInput;
  job?: JobWhereUniqueInput;
  rating?: number;
};
