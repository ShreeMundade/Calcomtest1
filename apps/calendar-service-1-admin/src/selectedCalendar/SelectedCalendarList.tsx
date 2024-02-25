import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CREDENTIAL_TITLE_FIELD } from "../credential/CredentialTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SelectedCalendarList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SelectedCalendars"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Credential"
          source="credential.id"
          reference="Credential"
        >
          <TextField source={CREDENTIAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="External Id" source="externalId" />
        <TextField label="ID" source="id" />
        <TextField label="Integration" source="integration" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
