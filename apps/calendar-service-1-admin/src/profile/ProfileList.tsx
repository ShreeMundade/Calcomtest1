import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const ProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Moved From User"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Organization" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Uid" source="uid" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
