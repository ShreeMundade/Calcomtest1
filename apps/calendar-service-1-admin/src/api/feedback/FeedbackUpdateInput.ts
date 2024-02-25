import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackUpdateInput = {
  comment?: string | null;
  rating?: string;
  user?: UserWhereUniqueInput;
};
