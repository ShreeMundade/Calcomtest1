import { CalendarCache as TCalendarCache } from "../api/calendarCache/CalendarCache";

export const CALENDARCACHE_TITLE_FIELD = "key";

export const CalendarCacheTitle = (record: TCalendarCache): string => {
  return record.key?.toString() || String(record.id);
};
