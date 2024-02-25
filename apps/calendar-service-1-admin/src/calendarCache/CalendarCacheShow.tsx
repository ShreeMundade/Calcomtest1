import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { CREDENTIAL_TITLE_FIELD } from "../credential/CredentialTitle";

export const CalendarCacheShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="Expires At" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="Key" source="key" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
