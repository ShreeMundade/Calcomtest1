import { SortOrder } from "../../util/SortOrder";

export type OAuthClientOrderByInput = {
  clientSecret?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  name?: SortOrder;
  redirectUri?: SortOrder;
};
