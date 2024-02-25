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
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const VerificationTokenList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VerificationTokens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Expires" source="expires" />
        <TextField label="Expires In Days" source="expiresInDays" />
        <TextField label="ID" source="id" />
        <TextField label="Identifier" source="identifier" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
