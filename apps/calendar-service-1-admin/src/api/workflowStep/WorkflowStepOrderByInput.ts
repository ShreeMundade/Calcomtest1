import { SortOrder } from "../../util/SortOrder";

export type WorkflowStepOrderByInput = {
  action?: SortOrder;
  emailSubject?: SortOrder;
  id?: SortOrder;
  includeCalendarEvent?: SortOrder;
  numberRequired?: SortOrder;
  numberVerificationPending?: SortOrder;
  reminderBody?: SortOrder;
  sender?: SortOrder;
  sendTo?: SortOrder;
  stepNumber?: SortOrder;
  template?: SortOrder;
  workflowId?: SortOrder;
};
