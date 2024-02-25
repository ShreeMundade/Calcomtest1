import { WorkflowsOnEventTypeUpdateManyWithoutWorkflowsInput } from "./WorkflowsOnEventTypeUpdateManyWithoutWorkflowsInput";
import { WorkflowStepUpdateManyWithoutWorkflowsInput } from "./WorkflowStepUpdateManyWithoutWorkflowsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkflowUpdateInput = {
  activeOn?: WorkflowsOnEventTypeUpdateManyWithoutWorkflowsInput;
  name?: string;
  position?: number;
  steps?: WorkflowStepUpdateManyWithoutWorkflowsInput;
  team?: TeamWhereUniqueInput | null;
  time?: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  trigger?:
    | "BEFORE_EVENT"
    | "EVENT_CANCELLED"
    | "NEW_EVENT"
    | "AFTER_EVENT"
    | "RESCHEDULE_EVENT";
  user?: UserWhereUniqueInput | null;
};
