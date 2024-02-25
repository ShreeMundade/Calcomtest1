import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type EventTypeCustomInputUpdateInput = {
  eventType?: EventTypeWhereUniqueInput;
  label?: string;
  options?: InputJsonValue;
  placeholder?: string;
  required?: boolean;
  type?: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL" | "RADIO" | "PHONE";
};
