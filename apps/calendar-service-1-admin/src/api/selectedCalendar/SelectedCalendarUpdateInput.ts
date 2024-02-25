import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SelectedCalendarUpdateInput = {
  credential?: CredentialWhereUniqueInput | null;
  externalId?: string;
  integration?: string;
  user?: UserWhereUniqueInput;
};
