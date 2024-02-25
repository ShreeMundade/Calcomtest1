import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { WorkflowReminderListRelationFilter } from "../workflowReminder/WorkflowReminderListRelationFilter";

export type WorkflowStepWhereInput = {
  action?:
    | "EMAIL_HOST"
    | "EMAIL_ATTENDEE"
    | "SMS_ATTENDEE"
    | "SMS_NUMBER"
    | "EMAIL_ADDRESS"
    | "WHATSAPP_ATTENDEE"
    | "WHATSAPP_NUMBER";
  emailSubject?: StringNullableFilter;
  id?: IntFilter;
  includeCalendarEvent?: BooleanFilter;
  numberRequired?: BooleanNullableFilter;
  numberVerificationPending?: BooleanFilter;
  reminderBody?: StringNullableFilter;
  sender?: StringNullableFilter;
  sendTo?: StringNullableFilter;
  stepNumber?: IntFilter;
  template?: "REMINDER" | "CUSTOM" | "CANCELLED" | "RESCHEDULED" | "COMPLETED";
  workflow?: WorkflowWhereUniqueInput;
  workflowReminders?: WorkflowReminderListRelationFilter;
};
