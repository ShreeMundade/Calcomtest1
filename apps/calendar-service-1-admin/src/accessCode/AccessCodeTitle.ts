import { AccessCode as TAccessCode } from "../api/accessCode/AccessCode";

export const ACCESSCODE_TITLE_FIELD = "code";

export const AccessCodeTitle = (record: TAccessCode): string => {
  return record.code?.toString() || String(record.id);
};
