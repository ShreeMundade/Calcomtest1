import { OutOfOfficeEntry as TOutOfOfficeEntry } from "../api/outOfOfficeEntry/OutOfOfficeEntry";

export const OUTOFOFFICEENTRY_TITLE_FIELD = "uuid";

export const OutOfOfficeEntryTitle = (record: TOutOfOfficeEntry): string => {
  return record.uuid?.toString() || String(record.id);
};
