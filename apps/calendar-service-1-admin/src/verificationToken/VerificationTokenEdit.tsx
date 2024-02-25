import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TeamTitle } from "../team/TeamTitle";

export const VerificationTokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Expires" source="expires" />
        <NumberInput step={1} label="Expires In Days" source="expiresInDays" />
        <TextInput label="Identifier" source="identifier" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="Token" source="token" />
      </SimpleForm>
    </Edit>
  );
};
