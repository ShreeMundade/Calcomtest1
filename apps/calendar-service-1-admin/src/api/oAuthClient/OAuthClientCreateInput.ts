import { AccessCodeCreateNestedManyWithoutOAuthClientsInput } from "./AccessCodeCreateNestedManyWithoutOAuthClientsInput";

export type OAuthClientCreateInput = {
  accessCodes?: AccessCodeCreateNestedManyWithoutOAuthClientsInput;
  clientSecret: string;
  logo?: string | null;
  name: string;
  redirectUri: string;
};
