import { SelectedSlot as TSelectedSlot } from "../api/selectedSlot/SelectedSlot";

export const SELECTEDSLOT_TITLE_FIELD = "uid";

export const SelectedSlotTitle = (record: TSelectedSlot): string => {
  return record.uid?.toString() || String(record.id);
};
