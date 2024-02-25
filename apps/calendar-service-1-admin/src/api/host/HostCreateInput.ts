import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HostCreateInput = {
  eventType: EventTypeWhereUniqueInput;
  isFixed: boolean;
  priority?: number | null;
  user: UserWhereUniqueInput;
};
