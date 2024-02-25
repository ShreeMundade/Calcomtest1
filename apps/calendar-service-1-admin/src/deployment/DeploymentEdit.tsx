import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DeploymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Agreed License At" source="agreedLicenseAt" />
        <TextInput label="License Key" source="licenseKey" />
        <TextInput label="Logo" source="logo" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
