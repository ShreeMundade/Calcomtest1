import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const FeatureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Features"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <BooleanField label="Enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="Last Used At" source="lastUsedAt" />
        <BooleanField label="Stale" source="stale" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Updated By" source="updatedBy" />
      </Datagrid>
    </List>
  );
};
