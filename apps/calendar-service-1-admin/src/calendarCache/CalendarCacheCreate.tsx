import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CredentialTitle } from "../credential/CredentialTitle";

export const CalendarCacheCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="credential.id"
          reference="Credential"
          label="Credential"
        >
          <SelectInput optionText={CredentialTitle} />
        </ReferenceInput>
        <DateTimeInput label="Expires At" source="expiresAt" />
        <TextInput label="Key" source="key" />
        <div />
      </SimpleForm>
    </Create>
  );
};
