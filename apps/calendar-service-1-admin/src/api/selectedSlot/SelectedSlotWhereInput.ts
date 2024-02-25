import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type SelectedSlotWhereInput = {
  eventTypeId?: IntFilter;
  id?: IntFilter;
  isSeat?: BooleanFilter;
  releaseAt?: DateTimeFilter;
  slotUtcEndDate?: DateTimeFilter;
  slotUtcStartDate?: DateTimeFilter;
  uid?: StringFilter;
  userId?: IntFilter;
};
