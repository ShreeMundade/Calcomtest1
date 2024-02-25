import { AccessCodeWhereInput } from "./AccessCodeWhereInput";
import { AccessCodeOrderByInput } from "./AccessCodeOrderByInput";

export type AccessCodeFindManyArgs = {
  where?: AccessCodeWhereInput;
  orderBy?: Array<AccessCodeOrderByInput>;
  skip?: number;
  take?: number;
};
