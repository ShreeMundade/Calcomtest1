import { AccessCodeUpdateManyWithoutOAuthClientsInput } from "./AccessCodeUpdateManyWithoutOAuthClientsInput";

export type OAuthClientUpdateInput = {
  accessCodes?: AccessCodeUpdateManyWithoutOAuthClientsInput;
  clientSecret?: string;
  logo?: string | null;
  name?: string;
  redirectUri?: string;
};
