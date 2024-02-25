import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { WorkflowStepWhereUniqueInput } from "../workflowStep/WorkflowStepWhereUniqueInput";

export type WorkflowReminderWhereInput = {
  booking?: BookingWhereUniqueInput;
  cancelled?: BooleanNullableFilter;
  id?: IntFilter;
  isMandatoryReminder?: BooleanNullableFilter;
  method?: "EMAIL" | "SMS" | "WHATSAPP";
  referenceId?: StringNullableFilter;
  scheduled?: BooleanFilter;
  scheduledDate?: DateTimeFilter;
  seatReferenceId?: StringNullableFilter;
  workflowStep?: WorkflowStepWhereUniqueInput;
};
