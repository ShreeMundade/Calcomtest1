import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput } from "./WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput";

export type WorkflowStepCreateInput = {
  action:
    | "EMAIL_HOST"
    | "EMAIL_ATTENDEE"
    | "SMS_ATTENDEE"
    | "SMS_NUMBER"
    | "EMAIL_ADDRESS"
    | "WHATSAPP_ATTENDEE"
    | "WHATSAPP_NUMBER";
  emailSubject?: string | null;
  includeCalendarEvent: boolean;
  numberRequired?: boolean | null;
  numberVerificationPending: boolean;
  reminderBody?: string | null;
  sender?: string | null;
  sendTo?: string | null;
  stepNumber: number;
  template: "REMINDER" | "CUSTOM" | "CANCELLED" | "RESCHEDULED" | "COMPLETED";
  workflow: WorkflowWhereUniqueInput;
  workflowReminders?: WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput;
};
