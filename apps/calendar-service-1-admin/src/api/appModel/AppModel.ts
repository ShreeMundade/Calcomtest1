import { ApiKey } from "../apiKey/ApiKey";
import { Credential } from "../credential/Credential";
import { JsonValue } from "type-fest";
import { Payment } from "../payment/Payment";
import { Webhook } from "../webhook/Webhook";

export type AppModel = {
  apiKey?: Array<ApiKey>;
  categories?: Array<
    | "calendar"
    | "messaging"
    | "other"
    | "payment"
    | "video"
    | "web3"
    | "automation"
    | "analytics"
    | "conferencing"
    | "crm"
  >;
  createdAt: Date;
  credentials?: Array<Credential>;
  dirName: string;
  enabled: boolean;
  id: string;
  keys: JsonValue;
  payments?: Array<Payment>;
  updatedAt: Date;
  webhook?: Array<Webhook>;
};
