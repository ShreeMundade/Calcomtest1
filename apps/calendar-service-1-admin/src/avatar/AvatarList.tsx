import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AvatarList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Avatars"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Data" source="data" />
        <TextField label="ID" source="id" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="User Id" source="userId" />
      </Datagrid>
    </List>
  );
};
