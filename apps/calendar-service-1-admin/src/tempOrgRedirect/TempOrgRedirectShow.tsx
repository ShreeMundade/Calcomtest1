import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";

export const TempOrgRedirectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Enabled" source="enabled" />
        <TextField label="From Field" source="fromField" />
        <TextField label="From Org Id" source="fromOrgId" />
        <TextField label="ID" source="id" />
        <TextField label="To Url" source="toUrl" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
