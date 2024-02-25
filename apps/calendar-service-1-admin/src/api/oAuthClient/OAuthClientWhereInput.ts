import { AccessCodeListRelationFilter } from "../accessCode/AccessCodeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OAuthClientWhereInput = {
  accessCodes?: AccessCodeListRelationFilter;
  clientSecret?: StringFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  name?: StringFilter;
  redirectUri?: StringFilter;
};
