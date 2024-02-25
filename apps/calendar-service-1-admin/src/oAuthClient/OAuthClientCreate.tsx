import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AccessCodeTitle } from "../accessCode/AccessCodeTitle";

export const OAuthClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accessCodes"
          reference="AccessCode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessCodeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Client Secret" source="clientSecret" />
        <TextInput label="Logo" source="logo" />
        <TextInput label="Name" source="name" />
        <TextInput label="Redirect Uri" source="redirectUri" />
      </SimpleForm>
    </Create>
  );
};
