import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CredentialTitle } from "../credential/CredentialTitle";
import { UserTitle } from "../user/UserTitle";

export const SelectedCalendarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="credential.id"
          reference="Credential"
          label="Credential"
        >
          <SelectInput optionText={CredentialTitle} />
        </ReferenceInput>
        <TextInput label="External Id" source="externalId" />
        <TextInput label="Integration" source="integration" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
