import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CalendarCacheWhereInput = {
  credential?: CredentialWhereUniqueInput;
  expiresAt?: DateTimeFilter;
  id?: IntFilter;
  key?: StringFilter;
  value?: JsonFilter;
};
