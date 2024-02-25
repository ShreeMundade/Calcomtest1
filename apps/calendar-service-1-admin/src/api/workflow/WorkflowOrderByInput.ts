import { SortOrder } from "../../util/SortOrder";

export type WorkflowOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  teamId?: SortOrder;
  time?: SortOrder;
  timeUnit?: SortOrder;
  trigger?: SortOrder;
  userId?: SortOrder;
};
