import { AccessCode } from "../accessCode/AccessCode";

export type OAuthClient = {
  accessCodes?: Array<AccessCode>;
  clientSecret: string;
  id: string;
  logo: string | null;
  name: string;
  redirectUri: string;
};
