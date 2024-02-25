import { VerifiedNumber as TVerifiedNumber } from "../api/verifiedNumber/VerifiedNumber";

export const VERIFIEDNUMBER_TITLE_FIELD = "phoneNumber";

export const VerifiedNumberTitle = (record: TVerifiedNumber): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
