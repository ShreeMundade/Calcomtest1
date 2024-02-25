import { InputJsonValue } from "../../types";
import { AppRoutingFormsFormResponseCreateNestedManyWithoutAppRoutingFormsFormsInput } from "./AppRoutingFormsFormResponseCreateNestedManyWithoutAppRoutingFormsFormsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppRoutingFormsFormCreateInput = {
  description?: string | null;
  disabled: boolean;
  fields?: InputJsonValue;
  name: string;
  position: number;
  responses?: AppRoutingFormsFormResponseCreateNestedManyWithoutAppRoutingFormsFormsInput;
  routes?: InputJsonValue;
  settings?: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
