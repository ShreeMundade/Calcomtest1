import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  comment?: string | null;
  rating: string;
  user: UserWhereUniqueInput;
};
