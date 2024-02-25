import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DeploymentWhereInput = {
  agreedLicenseAt?: DateTimeNullableFilter;
  id?: IntFilter;
  licenseKey?: StringNullableFilter;
  logo?: StringNullableFilter;
  theme?: JsonFilter;
};
