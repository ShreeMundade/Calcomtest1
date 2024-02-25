import { AppRoutingFormsFormWhereUniqueInput } from "../appRoutingFormsForm/AppRoutingFormsFormWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type AppRoutingFormsFormResponseCreateInput = {
  form: AppRoutingFormsFormWhereUniqueInput;
  formFillerId: string;
  response: InputJsonValue;
};
