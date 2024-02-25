import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { USERPASSWORD_TITLE_FIELD } from "../userPassword/UserPasswordTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="Allow Dynamic Booking"
          source="allowDynamicBooking"
        />
        <BooleanField label="Allow Seo Indexing" source="allowSEOIndexing" />
        <TextField label="App Theme" source="appTheme" />
        <TextField label="Avatar" source="avatar" />
        <TextField label="Avatar Url" source="avatarUrl" />
        <BooleanField label="Away" source="away" />
        <TextField label="Backup Codes" source="backupCodes" />
        <TextField label="Bio" source="bio" />
        <TextField label="Brand Color" source="brandColor" />
        <TextField label="Buffer Time" source="bufferTime" />
        <BooleanField
          label="Completed Onboarding"
          source="completedOnboarding"
        />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Dark Brand Color" source="darkBrandColor" />
        <TextField label="Default Schedule Id" source="defaultScheduleId" />
        <ReferenceField
          label="Destination Calendar"
          source="destinationcalendar.id"
          reference="DestinationCalendar"
        >
          <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified" source="emailVerified" />
        <TextField label="End Time" source="endTime" />
        <BooleanField label="Hide Branding" source="hideBranding" />
        <TextField label="ID" source="id" />
        <TextField label="Identity Provider" source="identityProvider" />
        <TextField label="Identity Provider Id" source="identityProviderId" />
        <TextField label="Invited To" source="invitedTo" />
        <TextField label="Locale" source="locale" />
        <BooleanField label="Locked" source="locked" />
        <TextField label="Metadata" source="metadata" />
        <ReferenceField
          label="Moved To Profile"
          source="profile.id"
          reference="Profile"
        >
          <TextField source={PROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <ReferenceField label="Organization" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Password"
          source="userpassword.id"
          reference="UserPassword"
        >
          <TextField source={USERPASSWORD_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField
          label="Receive Monthly Digest Email"
          source="receiveMonthlyDigestEmail"
        />
        <TextField label="Role" source="role" />
        <TextField label="Start Time" source="startTime" />
        <TextField label="Theme" source="theme" />
        <TextField label="Time Format" source="timeFormat" />
        <TextField label="Time Zone" source="timeZone" />
        <TextField label="Trial Ends At" source="trialEndsAt" />
        <BooleanField label="Two Factor Enabled" source="twoFactorEnabled" />
        <TextField label="Two Factor Secret" source="twoFactorSecret" />
        <TextField label="Username" source="username" />
        <BooleanField label="Verified" source="verified" />
        <TextField label="Week Start" source="weekStart" />
      </Datagrid>
    </List>
  );
};
