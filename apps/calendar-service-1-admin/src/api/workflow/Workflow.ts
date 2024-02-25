import { WorkflowsOnEventType } from "../workflowsOnEventType/WorkflowsOnEventType";
import { WorkflowStep } from "../workflowStep/WorkflowStep";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type Workflow = {
  activeOn?: Array<WorkflowsOnEventType>;
  id: number;
  name: string;
  position: number;
  steps?: Array<WorkflowStep>;
  team?: Team | null;
  time: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  trigger?:
    | "BEFORE_EVENT"
    | "EVENT_CANCELLED"
    | "NEW_EVENT"
    | "AFTER_EVENT"
    | "RESCHEDULE_EVENT";
  user?: User | null;
};
