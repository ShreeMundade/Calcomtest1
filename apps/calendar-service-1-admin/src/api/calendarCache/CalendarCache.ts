import { Credential } from "../credential/Credential";
import { JsonValue } from "type-fest";

export type CalendarCache = {
  credential?: Credential | null;
  expiresAt: Date;
  id: number;
  key: string;
  value: JsonValue;
};
