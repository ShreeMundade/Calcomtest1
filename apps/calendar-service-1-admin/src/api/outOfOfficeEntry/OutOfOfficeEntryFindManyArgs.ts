import { OutOfOfficeEntryWhereInput } from "./OutOfOfficeEntryWhereInput";
import { OutOfOfficeEntryOrderByInput } from "./OutOfOfficeEntryOrderByInput";

export type OutOfOfficeEntryFindManyArgs = {
  where?: OutOfOfficeEntryWhereInput;
  orderBy?: Array<OutOfOfficeEntryOrderByInput>;
  skip?: number;
  take?: number;
};
