import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AvatarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Data" source="data" />
        <NumberInput step={1} label="Team Id" source="teamId" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
