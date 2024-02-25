import { InstantMeetingToken as TInstantMeetingToken } from "../api/instantMeetingToken/InstantMeetingToken";

export const INSTANTMEETINGTOKEN_TITLE_FIELD = "token";

export const InstantMeetingTokenTitle = (
  record: TInstantMeetingToken
): string => {
  return record.token?.toString() || String(record.id);
};
