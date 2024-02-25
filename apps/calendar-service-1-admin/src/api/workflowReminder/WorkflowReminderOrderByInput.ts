import { SortOrder } from "../../util/SortOrder";

export type WorkflowReminderOrderByInput = {
  bookingUid?: SortOrder;
  cancelled?: SortOrder;
  id?: SortOrder;
  isMandatoryReminder?: SortOrder;
  method?: SortOrder;
  referenceId?: SortOrder;
  scheduled?: SortOrder;
  scheduledDate?: SortOrder;
  seatReferenceId?: SortOrder;
  workflowStepId?: SortOrder;
};
