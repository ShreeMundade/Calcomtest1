import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const FeatureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <BooleanField label="Enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="Last Used At" source="lastUsedAt" />
        <BooleanField label="Stale" source="stale" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Updated By" source="updatedBy" />
      </SimpleShowLayout>
    </Show>
  );
};
