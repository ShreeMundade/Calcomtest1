import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SelectedCalendarWhereInput = {
  credential?: CredentialWhereUniqueInput;
  externalId?: StringFilter;
  id?: IntFilter;
  integration?: StringFilter;
  user?: UserWhereUniqueInput;
};
