import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CREDENTIAL_TITLE_FIELD } from "./CredentialTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const CredentialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="App Field"
          source="appmodel.id"
          reference="AppModel"
        >
          <TextField source={APPMODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Billing Cycle Start" source="billingCycleStart" />
        <TextField label="ID" source="id" />
        <BooleanField label="Invalid" source="invalid" />
        <TextField label="Key" source="key" />
        <TextField label="Payment Status" source="paymentStatus" />
        <TextField label="Subscription Id" source="subscriptionId" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type Field" source="typeField" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="CalendarCache"
          target="credentialId"
          label="CalendarCaches"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DestinationCalendar"
          target="credentialId"
          label="DestinationCalendars"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Credential"
              source="credential.id"
              reference="Credential"
            >
              <TextField source={CREDENTIAL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="External Id" source="externalId" />
            <TextField label="ID" source="id" />
            <TextField label="Integration" source="integration" />
            <TextField label="Primary Email" source="primaryEmail" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SelectedCalendar"
          target="credentialId"
          label="SelectedCalendars"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
