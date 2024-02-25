import { EventType } from "../eventType/EventType";
import { JsonValue } from "type-fest";

export type EventTypeCustomInput = {
  eventType?: EventType;
  id: number;
  label: string;
  options: JsonValue;
  placeholder: string;
  required: boolean;
  type?: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL" | "RADIO" | "PHONE";
};
