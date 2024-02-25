import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { ApiKeyTitle } from "../apiKey/ApiKeyTitle";
import { CredentialTitle } from "../credential/CredentialTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";

export const AppModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="apiKey"
          reference="ApiKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiKeyTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          label="Categories"
          source="categories"
          choices={[
            { label: "calendar", value: "calendar" },
            { label: "messaging", value: "messaging" },
            { label: "other", value: "other" },
            { label: "payment", value: "payment" },
            { label: "video", value: "video" },
            { label: "web3", value: "web3" },
            { label: "automation", value: "automation" },
            { label: "analytics", value: "analytics" },
            { label: "conferencing", value: "conferencing" },
            { label: "crm", value: "crm" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="credentials"
          reference="Credential"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CredentialTitle} />
        </ReferenceArrayInput>
        <TextInput label="Dir Name" source="dirName" />
        <BooleanInput label="Enabled" source="enabled" />
        <div />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="webhook"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
