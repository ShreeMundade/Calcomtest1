import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const TempOrgRedirectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TempOrgRedirects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Enabled" source="enabled" />
        <TextField label="From Field" source="fromField" />
        <TextField label="From Org Id" source="fromOrgId" />
        <TextField label="ID" source="id" />
        <TextField label="To Url" source="toUrl" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
