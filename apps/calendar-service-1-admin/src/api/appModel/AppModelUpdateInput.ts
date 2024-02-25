import { ApiKeyUpdateManyWithoutAppModelsInput } from "./ApiKeyUpdateManyWithoutAppModelsInput";
import { CredentialUpdateManyWithoutAppModelsInput } from "./CredentialUpdateManyWithoutAppModelsInput";
import { InputJsonValue } from "../../types";
import { PaymentUpdateManyWithoutAppModelsInput } from "./PaymentUpdateManyWithoutAppModelsInput";
import { WebhookUpdateManyWithoutAppModelsInput } from "./WebhookUpdateManyWithoutAppModelsInput";

export type AppModelUpdateInput = {
  apiKey?: ApiKeyUpdateManyWithoutAppModelsInput;
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
  credentials?: CredentialUpdateManyWithoutAppModelsInput;
  dirName?: string;
  enabled?: boolean;
  keys?: InputJsonValue;
  payments?: PaymentUpdateManyWithoutAppModelsInput;
  webhook?: WebhookUpdateManyWithoutAppModelsInput;
};
