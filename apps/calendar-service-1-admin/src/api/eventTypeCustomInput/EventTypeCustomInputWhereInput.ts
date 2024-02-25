import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type EventTypeCustomInputWhereInput = {
  eventType?: EventTypeWhereUniqueInput;
  id?: IntFilter;
  label?: StringFilter;
  options?: JsonFilter;
  placeholder?: StringFilter;
  required?: BooleanFilter;
  type?: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL" | "RADIO" | "PHONE";
};
