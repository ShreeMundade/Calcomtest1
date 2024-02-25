import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { CREDENTIAL_TITLE_FIELD } from "../credential/CredentialTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SelectedCalendarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
