import { WorkflowsOnEventTypeListRelationFilter } from "../workflowsOnEventType/WorkflowsOnEventTypeListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkflowStepListRelationFilter } from "../workflowStep/WorkflowStepListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkflowWhereInput = {
  activeOn?: WorkflowsOnEventTypeListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  position?: IntFilter;
  steps?: WorkflowStepListRelationFilter;
  team?: TeamWhereUniqueInput;
  time?: IntNullableFilter;
  timeUnit?: "DAY" | "HOUR" | "MINUTE";
  trigger?:
    | "BEFORE_EVENT"
    | "EVENT_CANCELLED"
    | "NEW_EVENT"
    | "AFTER_EVENT"
    | "RESCHEDULE_EVENT";
  user?: UserWhereUniqueInput;
};
