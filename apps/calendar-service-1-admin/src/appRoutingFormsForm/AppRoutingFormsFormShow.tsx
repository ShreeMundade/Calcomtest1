import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPROUTINGFORMSFORM_TITLE_FIELD } from "./AppRoutingFormsFormTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AppRoutingFormsFormShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <BooleanField label="Disabled" source="disabled" />
        <TextField label="Fields" source="fields" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Position" source="position" />
        <TextField label="Routes" source="routes" />
        <TextField label="Settings" source="settings" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="AppRoutingFormsFormResponse"
          target="formId"
          label="AppRoutingFormsFormResponses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Form"
              source="approutingformsform.id"
              reference="AppRoutingFormsForm"
            >
              <TextField source={APPROUTINGFORMSFORM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Form Filler Id" source="formFillerId" />
            <TextField label="ID" source="id" />
            <TextField label="Response" source="response" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
