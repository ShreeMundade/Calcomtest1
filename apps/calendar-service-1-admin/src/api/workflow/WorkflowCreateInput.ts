import { WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput } from "./WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput";
import { WorkflowStepCreateNestedManyWithoutWorkflowsInput } from "./WorkflowStepCreateNestedManyWithoutWorkflowsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkflowCreateInput = {
  activeOn?: WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput;
  name: string;
  position: number;
  steps?: WorkflowStepCreateNestedManyWithoutWorkflowsInput;
  team?: TeamWhereUniqueInput | null;
  time?: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  trigger:
    | "BEFORE_EVENT"
    | "EVENT_CANCELLED"
    | "NEW_EVENT"
    | "AFTER_EVENT"
    | "RESCHEDULE_EVENT";
  user?: UserWhereUniqueInput | null;
};
