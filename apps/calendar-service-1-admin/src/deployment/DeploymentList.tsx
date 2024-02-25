import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DeploymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Deployments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Agreed License At" source="agreedLicenseAt" />
        <TextField label="ID" source="id" />
        <TextField label="License Key" source="licenseKey" />
        <TextField label="Logo" source="logo" />
        <TextField label="Theme" source="theme" />
      </Datagrid>
    </List>
  );
};
