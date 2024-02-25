import { BookingSeatWhereInput } from "./BookingSeatWhereInput";
import { BookingSeatOrderByInput } from "./BookingSeatOrderByInput";

export type BookingSeatFindManyArgs = {
  where?: BookingSeatWhereInput;
  orderBy?: Array<BookingSeatOrderByInput>;
  skip?: number;
  take?: number;
};
