import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { OAUTHCLIENT_TITLE_FIELD } from "./OAuthClientTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OAuthClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Client Secret" source="clientSecret" />
        <TextField label="ID" source="id" />
        <TextField label="Logo" source="logo" />
        <TextField label="Name" source="name" />
        <TextField label="Redirect Uri" source="redirectUri" />
        <ReferenceManyField
          reference="AccessCode"
          target="clientId"
          label="AccessCodes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Client"
              source="oauthclient.id"
              reference="OAuthClient"
            >
              <TextField source={OAUTHCLIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="ID" source="id" />
            <TextField label="Scopes" source="scopes" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
