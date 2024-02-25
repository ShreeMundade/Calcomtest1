import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DeploymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Agreed License At" source="agreedLicenseAt" />
        <TextField label="ID" source="id" />
        <TextField label="License Key" source="licenseKey" />
        <TextField label="Logo" source="logo" />
        <TextField label="Theme" source="theme" />
      </SimpleShowLayout>
    </Show>
  );
};
