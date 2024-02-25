import { ApiKeyListRelationFilter } from "../apiKey/ApiKeyListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CredentialListRelationFilter } from "../credential/CredentialListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { WebhookListRelationFilter } from "../webhook/WebhookListRelationFilter";

export type AppModelWhereInput = {
  apiKey?: ApiKeyListRelationFilter;
  createdAt?: DateTimeFilter;
  credentials?: CredentialListRelationFilter;
  dirName?: StringFilter;
  enabled?: BooleanFilter;
  id?: StringFilter;
  keys?: JsonFilter;
  payments?: PaymentListRelationFilter;
  updatedAt?: DateTimeFilter;
  webhook?: WebhookListRelationFilter;
};
