import { Credential as TCredential } from "../api/credential/Credential";

export const CREDENTIAL_TITLE_FIELD = "paymentStatus";

export const CredentialTitle = (record: TCredential): string => {
  return record.paymentStatus?.toString() || String(record.id);
};
