import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DeploymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Agreed License At" source="agreedLicenseAt" />
        <TextInput label="License Key" source="licenseKey" />
        <TextInput label="Logo" source="logo" />
        <div />
      </SimpleForm>
    </Create>
  );
};
