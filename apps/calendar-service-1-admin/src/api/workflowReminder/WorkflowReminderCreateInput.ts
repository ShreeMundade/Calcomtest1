import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { WorkflowStepWhereUniqueInput } from "../workflowStep/WorkflowStepWhereUniqueInput";

export type WorkflowReminderCreateInput = {
  booking?: BookingWhereUniqueInput | null;
  cancelled?: boolean | null;
  isMandatoryReminder?: boolean | null;
  method: "EMAIL" | "SMS" | "WHATSAPP";
  referenceId?: string | null;
  scheduled: boolean;
  scheduledDate: Date;
  seatReferenceId?: string | null;
  workflowStep?: WorkflowStepWhereUniqueInput | null;
};
