import { OAuthClient as TOAuthClient } from "../api/oAuthClient/OAuthClient";

export const OAUTHCLIENT_TITLE_FIELD = "name";

export const OAuthClientTitle = (record: TOAuthClient): string => {
  return record.name?.toString() || String(record.id);
};
