import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ReviewCreateInput = {
  client: UserWhereUniqueInput;
  content: string;
  freelancer: UserWhereUniqueInput;
  job: JobWhereUniqueInput;
  rating: number;
};
