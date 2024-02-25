import { OAuthClientWhereInput } from "./OAuthClientWhereInput";
import { OAuthClientOrderByInput } from "./OAuthClientOrderByInput";

export type OAuthClientFindManyArgs = {
  where?: OAuthClientWhereInput;
  orderBy?: Array<OAuthClientOrderByInput>;
  skip?: number;
  take?: number;
};
