import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "username";

export const ProfileTitle = (record: TProfile): string => {
  return record.username?.toString() || String(record.id);
};
