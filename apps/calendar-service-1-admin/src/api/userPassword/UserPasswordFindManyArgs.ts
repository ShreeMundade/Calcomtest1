import { UserPasswordWhereInput } from "./UserPasswordWhereInput";
import { UserPasswordOrderByInput } from "./UserPasswordOrderByInput";

export type UserPasswordFindManyArgs = {
  where?: UserPasswordWhereInput;
  orderBy?: Array<UserPasswordOrderByInput>;
  skip?: number;
  take?: number;
};
