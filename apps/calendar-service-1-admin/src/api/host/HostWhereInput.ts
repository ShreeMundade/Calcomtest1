import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HostWhereInput = {
  eventType?: EventTypeWhereUniqueInput;
  id?: IntFilter;
  isFixed?: BooleanFilter;
  priority?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
