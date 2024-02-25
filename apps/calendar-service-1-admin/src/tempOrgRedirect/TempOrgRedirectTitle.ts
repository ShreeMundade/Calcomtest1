import { TempOrgRedirect as TTempOrgRedirect } from "../api/tempOrgRedirect/TempOrgRedirect";

export const TEMPORGREDIRECT_TITLE_FIELD = "fromField";

export const TempOrgRedirectTitle = (record: TTempOrgRedirect): string => {
  return record.fromField?.toString() || String(record.id);
};
