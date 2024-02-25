import { Booking } from "../booking/Booking";
import { WorkflowStep } from "../workflowStep/WorkflowStep";

export type WorkflowReminder = {
  booking?: Booking | null;
  cancelled: boolean | null;
  id: number;
  isMandatoryReminder: boolean | null;
  method?: "EMAIL" | "SMS" | "WHATSAPP";
  referenceId: string | null;
  scheduled: boolean;
  scheduledDate: Date;
  seatReferenceId: string | null;
  workflowStep?: WorkflowStep | null;
};
