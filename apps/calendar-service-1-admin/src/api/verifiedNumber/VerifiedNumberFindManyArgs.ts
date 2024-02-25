import { VerifiedNumberWhereInput } from "./VerifiedNumberWhereInput";
import { VerifiedNumberOrderByInput } from "./VerifiedNumberOrderByInput";

export type VerifiedNumberFindManyArgs = {
  where?: VerifiedNumberWhereInput;
  orderBy?: Array<VerifiedNumberOrderByInput>;
  skip?: number;
  take?: number;
};
