import { Avatar as TAvatar } from "../api/avatar/Avatar";

export const AVATAR_TITLE_FIELD = "data";

export const AvatarTitle = (record: TAvatar): string => {
  return record.data?.toString() || String(record.id);
};
