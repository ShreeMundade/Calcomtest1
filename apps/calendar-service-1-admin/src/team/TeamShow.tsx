import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { OAUTHCLIENT_TITLE_FIELD } from "../oAuthClient/OAuthClientTitle";
import { TEAM_TITLE_FIELD } from "./TeamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { HASHEDLINK_TITLE_FIELD } from "../hashedLink/HashedLinkTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { USERPASSWORD_TITLE_FIELD } from "../userPassword/UserPasswordTitle";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="AccessCode"
          target="teamId"
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
        <ReferenceManyField reference="ApiKey" target="teamId" label="ApiKeys">
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="Hashed Key" source="hashedKey" />
            <TextField label="ID" source="id" />
            <TextField label="Last Used At" source="lastUsedAt" />
            <TextField label="Note" source="note" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Team" target="parentId" label="Teams">
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Credential"
          target="teamId"
          label="Credentials"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EventType"
          target="teamId"
          label="EventTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="After Event Buffer" source="afterEventBuffer" />
            <BooleanField
              label="Assign All Team Members"
              source="assignAllTeamMembers"
            />
            <TextField label="Before Event Buffer" source="beforeEventBuffer" />
            <TextField label="Booking Fields" source="bookingFields" />
            <TextField label="Booking Limits" source="bookingLimits" />
            <TextField label="Currency" source="currency" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Destination Calendar"
              source="destinationcalendar.id"
              reference="DestinationCalendar"
            >
              <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Disable Guests" source="disableGuests" />
            <TextField label="Duration Limits" source="durationLimits" />
            <TextField label="Event Name" source="eventName" />
            <ReferenceField
              label="Hashed Link"
              source="hashedlink.id"
              reference="HashedLink"
            >
              <TextField source={HASHEDLINK_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Hidden" source="hidden" />
            <BooleanField
              label="Hide Calendar Notes"
              source="hideCalendarNotes"
            />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Instant Event" source="isInstantEvent" />
            <TextField label="Length" source="length" />
            <TextField label="Locations" source="locations" />
            <BooleanField
              label="Lock Time Zone Toggle On Booking Page"
              source="lockTimeZoneToggleOnBookingPage"
            />
            <TextField label="Metadata" source="metadata" />
            <TextField
              label="Minimum Booking Notice"
              source="minimumBookingNotice"
            />
            <TextField label="Offset Start" source="offsetStart" />
            <BooleanField
              label="Only Show First Available Slot"
              source="onlyShowFirstAvailableSlot"
            />
            <ReferenceField label="Owner" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Parent"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField
              label="Period Count Calendar Days"
              source="periodCountCalendarDays"
            />
            <TextField label="Period Days" source="periodDays" />
            <TextField label="Period End Date" source="periodEndDate" />
            <TextField label="Period Start Date" source="periodStartDate" />
            <TextField label="Period Type" source="periodType" />
            <TextField label="Position" source="position" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Profile"
              source="profile.id"
              reference="Profile"
            >
              <TextField source={PROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Recurring Event" source="recurringEvent" />
            <BooleanField
              label="Requires Booker Email Verification"
              source="requiresBookerEmailVerification"
            />
            <BooleanField
              label="Requires Confirmation"
              source="requiresConfirmation"
            />
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Scheduling Type" source="schedulingType" />
            <TextField label="Seats Per Time Slot" source="seatsPerTimeSlot" />
            <BooleanField
              label="Seats Show Attendees"
              source="seatsShowAttendees"
            />
            <BooleanField
              label="Seats Show Availability Count"
              source="seatsShowAvailabilityCount"
            />
            <TextField label="Slot Interval" source="slotInterval" />
            <TextField label="Slug" source="slug" />
            <TextField
              label="Success Redirect Url"
              source="successRedirectUrl"
            />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time Zone" source="timeZone" />
            <TextField label="Title" source="title" />
            <BooleanField
              label="Use Event Type Destination Calendar Email"
              source="useEventTypeDestinationCalendarEmail"
            />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InstantMeetingToken"
          target="teamId"
          label="InstantMeetingTokens"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expires" source="expires" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Token" source="token" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="VerificationToken"
          target="teamId"
          label="VerificationTokens"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Membership"
          target="teamId"
          label="Memberships"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Accepted" source="accepted" />
            <BooleanField
              label="Disable Impersonation"
              source="disableImpersonation"
            />
            <TextField label="ID" source="id" />
            <TextField label="Role" source="role" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Profile"
          target="organizationId"
          label="Profiles"
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
            <ReferenceField
              label="Organization"
              source="team.id"
              reference="Team"
            >
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Uid" source="uid" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="User"
          target="organizationId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <BooleanField
              label="Allow Dynamic Booking"
              source="allowDynamicBooking"
            />
            <BooleanField
              label="Allow Seo Indexing"
              source="allowSEOIndexing"
            />
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
            <TextField
              label="Identity Provider Id"
              source="identityProviderId"
            />
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
            <ReferenceField
              label="Organization"
              source="team.id"
              reference="Team"
            >
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
            <BooleanField
              label="Two Factor Enabled"
              source="twoFactorEnabled"
            />
            <TextField label="Two Factor Secret" source="twoFactorSecret" />
            <TextField label="Username" source="username" />
            <BooleanField label="Verified" source="verified" />
            <TextField label="Week Start" source="weekStart" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AppRoutingFormsForm"
          target="teamId"
          label="AppRoutingFormsForms"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="VerifiedNumber"
          target="teamId"
          label="VerifiedNumbers"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Phone Number" source="phoneNumber" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Webhook"
          target="teamId"
          label="Webhooks"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Active" source="active" />
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Event Triggers" source="eventTriggers" />
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Payload Template" source="payloadTemplate" />
            <TextField label="Secret" source="secret" />
            <TextField label="Subscriber Url" source="subscriberUrl" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Workflow"
          target="teamId"
          label="Workflows"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Position" source="position" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time" source="time" />
            <TextField label="Time Unit" source="timeUnit" />
            <TextField label="Trigger" source="trigger" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
