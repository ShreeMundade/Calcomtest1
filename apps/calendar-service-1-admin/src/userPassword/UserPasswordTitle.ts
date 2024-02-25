import { UserPassword as TUserPassword } from "../api/userPassword/UserPassword";

export const USERPASSWORD_TITLE_FIELD = "hash";

export const UserPasswordTitle = (record: TUserPassword): string => {
  return record.hash?.toString() || String(record.id);
};
