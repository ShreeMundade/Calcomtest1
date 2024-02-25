import { DateTimeFilter } from "../../util/DateTimeFilter";
import { AppRoutingFormsFormWhereUniqueInput } from "../appRoutingFormsForm/AppRoutingFormsFormWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AppRoutingFormsFormResponseWhereInput = {
  createdAt?: DateTimeFilter;
  form?: AppRoutingFormsFormWhereUniqueInput;
  formFillerId?: StringFilter;
  id?: IntFilter;
  response?: JsonFilter;
};
