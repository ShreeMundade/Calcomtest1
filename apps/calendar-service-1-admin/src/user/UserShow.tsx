import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { OAUTHCLIENT_TITLE_FIELD } from "../oAuthClient/OAuthClientTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { INSTANTMEETINGTOKEN_TITLE_FIELD } from "../instantMeetingToken/InstantMeetingTokenTitle";
import { HASHEDLINK_TITLE_FIELD } from "../hashedLink/HashedLinkTitle";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";
import { CREDENTIAL_TITLE_FIELD } from "../credential/CredentialTitle";
import { USERPASSWORD_TITLE_FIELD } from "../userPassword/UserPasswordTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="AccessCode"
          target="userId"
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
        <ReferenceManyField
          reference="Account"
          target="userId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="Access Token" source="accessToken" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="ID" source="id" />
            <TextField label="Id Token" source="idToken" />
            <TextField label="Provider" source="provider" />
            <TextField label="Provider Account Id" source="providerAccountId" />
            <TextField label="Refresh Token" source="refreshToken" />
            <TextField label="Scope" source="scope" />
            <TextField label="Session State" source="sessionState" />
            <TextField label="Token Type" source="tokenType" />
            <TextField label="Type Field" source="typeField" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="ApiKey" target="userId" label="ApiKeys">
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
        <ReferenceManyField
          reference="Availability"
          target="userId"
          label="Availabilities"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="Days" source="days" />
            <TextField label="End Time" source="endTime" />
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Time" source="startTime" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OutOfOfficeEntry"
          target="userId"
          label="OutOfOfficeEntries"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="End" source="end" />
            <TextField label="ID" source="id" />
            <TextField label="Start" source="start" />
            <ReferenceField label="To User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Uuid" source="uuid" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OutOfOfficeEntry"
          target="toUserId"
          label="OutOfOfficeEntries"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="End" source="end" />
            <TextField label="ID" source="id" />
            <TextField label="Start" source="start" />
            <ReferenceField label="To User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Uuid" source="uuid" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Booking"
          target="userId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Cancellation Reason"
              source="cancellationReason"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Custom Inputs" source="customInputs" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Destination Calendar"
              source="destinationcalendar.id"
              reference="DestinationCalendar"
            >
              <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Dynamic Event Slug Ref"
              source="dynamicEventSlugRef"
            />
            <TextField
              label="Dynamic Group Slug Ref"
              source="dynamicGroupSlugRef"
            />
            <TextField label="End Time" source="endTime" />
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="From Reschedule" source="fromReschedule" />
            <TextField label="I Cal Sequence" source="iCalSequence" />
            <TextField label="I Cal Uid" source="iCalUID" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Instant Meeting Token"
              source="instantmeetingtoken.id"
              reference="InstantMeetingToken"
            >
              <TextField source={INSTANTMEETINGTOKEN_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Is Recorded" source="isRecorded" />
            <TextField label="Location" source="location" />
            <TextField label="Metadata" source="metadata" />
            <BooleanField label="Paid" source="paid" />
            <TextField label="Recurring Event Id" source="recurringEventId" />
            <TextField label="Rejection Reason" source="rejectionReason" />
            <BooleanField label="Rescheduled" source="rescheduled" />
            <TextField label="Responses" source="responses" />
            <TextField label="Scheduled Jobs" source="scheduledJobs" />
            <TextField label="Sms Reminder Number" source="smsReminderNumber" />
            <TextField label="Start Time" source="startTime" />
            <TextField label="Status" source="status" />
            <TextField label="Title" source="title" />
            <TextField label="Uid" source="uid" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="User Primary Email" source="userPrimaryEmail" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Credential"
          target="userId"
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
          reference="Feedback"
          target="userId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="Comment" source="comment" />
            <DateField source="date" label="Date" />
            <TextField label="ID" source="id" />
            <TextField label="Rating" source="rating" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Host" target="userId" label="Hosts">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Fixed" source="isFixed" />
            <TextField label="Priority" source="priority" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Impersonation"
          target="impersonatedById"
          label="Impersonations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Impersonated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Impersonated User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Impersonation"
          target="impersonatedUserId"
          label="Impersonations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Impersonated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Impersonated User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EventType"
          target="userId"
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
          reference="Profile"
          target="userId"
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
          reference="AppRoutingFormsForm"
          target="userId"
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
          reference="Schedule"
          target="userId"
          label="Schedules"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Time Zone" source="timeZone" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SelectedCalendar"
          target="userId"
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
        <ReferenceManyField
          reference="Session"
          target="userId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <TextField label="Expires" source="expires" />
            <TextField label="ID" source="id" />
            <TextField label="Session Token" source="sessionToken" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Membership"
          target="userId"
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
          reference="VerifiedNumber"
          target="userId"
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
          target="userId"
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
          target="userId"
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
