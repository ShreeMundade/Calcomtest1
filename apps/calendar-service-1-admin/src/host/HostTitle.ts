import { Host as THost } from "../api/host/Host";

export const HOST_TITLE_FIELD = "id";

export const HostTitle = (record: THost): string => {
  return record.id?.toString() || String(record.id);
};
