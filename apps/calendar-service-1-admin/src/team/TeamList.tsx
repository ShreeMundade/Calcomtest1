import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TEAM_TITLE_FIELD } from "./TeamTitle";

export const TeamList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Teams"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="App Icon Logo" source="appIconLogo" />
        <TextField label="App Logo" source="appLogo" />
        <TextField label="Bio" source="bio" />
        <TextField label="Brand Color" source="brandColor" />
        <TextField label="Cal Video Logo" source="calVideoLogo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dark Brand Color" source="darkBrandColor" />
        <BooleanField
          label="Hide Book A Team Member"
          source="hideBookATeamMember"
        />
        <BooleanField label="Hide Branding" source="hideBranding" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Private" source="isPrivate" />
        <TextField label="Logo" source="logo" />
        <TextField label="Logo Url" source="logoUrl" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Parent" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Pending Payment" source="pendingPayment" />
        <TextField label="Slug" source="slug" />
        <TextField label="Theme" source="theme" />
        <TextField label="Time Format" source="timeFormat" />
        <TextField label="Time Zone" source="timeZone" />
        <TextField label="Week Start" source="weekStart" />
      </Datagrid>
    </List>
  );
};
