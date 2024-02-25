import { ApiKeyCreateNestedManyWithoutAppModelsInput } from "./ApiKeyCreateNestedManyWithoutAppModelsInput";
import { CredentialCreateNestedManyWithoutAppModelsInput } from "./CredentialCreateNestedManyWithoutAppModelsInput";
import { InputJsonValue } from "../../types";
import { PaymentCreateNestedManyWithoutAppModelsInput } from "./PaymentCreateNestedManyWithoutAppModelsInput";
import { WebhookCreateNestedManyWithoutAppModelsInput } from "./WebhookCreateNestedManyWithoutAppModelsInput";

export type AppModelCreateInput = {
  apiKey?: ApiKeyCreateNestedManyWithoutAppModelsInput;
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
  credentials?: CredentialCreateNestedManyWithoutAppModelsInput;
  dirName: string;
  enabled: boolean;
  keys?: InputJsonValue;
  payments?: PaymentCreateNestedManyWithoutAppModelsInput;
  webhook?: WebhookCreateNestedManyWithoutAppModelsInput;
};
