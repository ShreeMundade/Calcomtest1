import { BookingSeat as TBookingSeat } from "../api/bookingSeat/BookingSeat";

export const BOOKINGSEAT_TITLE_FIELD = "referenceUid";

export const BookingSeatTitle = (record: TBookingSeat): string => {
  return record.referenceUid?.toString() || String(record.id);
};
