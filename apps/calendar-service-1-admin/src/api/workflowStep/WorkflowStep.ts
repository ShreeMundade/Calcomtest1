import { Workflow } from "../workflow/Workflow";
import { WorkflowReminder } from "../workflowReminder/WorkflowReminder";

export type WorkflowStep = {
  action?:
    | "EMAIL_HOST"
    | "EMAIL_ATTENDEE"
    | "SMS_ATTENDEE"
    | "SMS_NUMBER"
    | "EMAIL_ADDRESS"
    | "WHATSAPP_ATTENDEE"
    | "WHATSAPP_NUMBER";
  emailSubject: string | null;
  id: number;
  includeCalendarEvent: boolean;
  numberRequired: boolean | null;
  numberVerificationPending: boolean;
  reminderBody: string | null;
  sender: string | null;
  sendTo: string | null;
  stepNumber: number;
  template?: "REMINDER" | "CUSTOM" | "CANCELLED" | "RESCHEDULED" | "COMPLETED";
  workflow?: Workflow;
  workflowReminders?: Array<WorkflowReminder>;
};
