import { CalendarCacheWhereInput } from "./CalendarCacheWhereInput";
import { CalendarCacheOrderByInput } from "./CalendarCacheOrderByInput";

export type CalendarCacheFindManyArgs = {
  where?: CalendarCacheWhereInput;
  orderBy?: Array<CalendarCacheOrderByInput>;
  skip?: number;
  take?: number;
};
