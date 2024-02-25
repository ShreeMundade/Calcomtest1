import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type CalendarCacheCreateInput = {
  credential?: CredentialWhereUniqueInput | null;
  expiresAt: Date;
  key: string;
  value: InputJsonValue;
};
