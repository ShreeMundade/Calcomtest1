import { AppRoutingFormsForm } from "../appRoutingFormsForm/AppRoutingFormsForm";
import { JsonValue } from "type-fest";

export type AppRoutingFormsFormResponse = {
  createdAt: Date;
  form?: AppRoutingFormsForm;
  formFillerId: string;
  id: number;
  response: JsonValue;
};
