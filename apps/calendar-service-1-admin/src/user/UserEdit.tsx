import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { AccessCodeTitle } from "../accessCode/AccessCodeTitle";
import { AccountTitle } from "../account/AccountTitle";
import { ApiKeyTitle } from "../apiKey/ApiKeyTitle";
import { AvailabilityTitle } from "../availability/AvailabilityTitle";
import { OutOfOfficeEntryTitle } from "../outOfOfficeEntry/OutOfOfficeEntryTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { CredentialTitle } from "../credential/CredentialTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { HostTitle } from "../host/HostTitle";
import { ImpersonationTitle } from "../impersonation/ImpersonationTitle";
import { ProfileTitle } from "../profile/ProfileTitle";
import { TeamTitle } from "../team/TeamTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { UserPasswordTitle } from "../userPassword/UserPasswordTitle";
import { AppRoutingFormsFormTitle } from "../appRoutingFormsForm/AppRoutingFormsFormTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { SelectedCalendarTitle } from "../selectedCalendar/SelectedCalendarTitle";
import { SessionTitle } from "../session/SessionTitle";
import { MembershipTitle } from "../membership/MembershipTitle";
import { VerifiedNumberTitle } from "../verifiedNumber/VerifiedNumberTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";
import { WorkflowTitle } from "../workflow/WorkflowTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accessCodes"
          reference="AccessCode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessCodeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Allow Dynamic Booking"
          source="allowDynamicBooking"
        />
        <BooleanInput label="Allow Seo Indexing" source="allowSEOIndexing" />
        <ReferenceArrayInput
          source="apiKeys"
          reference="ApiKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiKeyTitle} />
        </ReferenceArrayInput>
        <TextInput label="App Theme" source="appTheme" />
        <ReferenceArrayInput
          source="availability"
          reference="Availability"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AvailabilityTitle} />
        </ReferenceArrayInput>
        <TextInput label="Avatar" source="avatar" />
        <TextInput label="Avatar Url" source="avatarUrl" />
        <BooleanInput label="Away" source="away" />
        <TextInput label="Backup Codes" source="backupCodes" />
        <TextInput label="Bio" source="bio" />
        <ReferenceArrayInput
          source="bookingRedirects"
          reference="OutOfOfficeEntry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OutOfOfficeEntryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bookingRedirectsTo"
          reference="OutOfOfficeEntry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OutOfOfficeEntryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Brand Color" source="brandColor" />
        <NumberInput step={1} label="Buffer Time" source="bufferTime" />
        <BooleanInput
          label="Completed Onboarding"
          source="completedOnboarding"
        />
        <ReferenceArrayInput
          source="credentials"
          reference="Credential"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CredentialTitle} />
        </ReferenceArrayInput>
        <TextInput label="Dark Brand Color" source="darkBrandColor" />
        <NumberInput
          step={1}
          label="Default Schedule Id"
          source="defaultScheduleId"
        />
        <ReferenceInput
          source="destinationCalendar.id"
          reference="DestinationCalendar"
          label="Destination Calendar"
        >
          <SelectInput optionText={DestinationCalendarTitle} />
        </ReferenceInput>
        <BooleanInput
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Email Verified" source="emailVerified" />
        <NumberInput step={1} label="End Time" source="endTime" />
        <ReferenceArrayInput
          source="feedback"
          reference="Feedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedbackTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Hide Branding" source="hideBranding" />
        <ReferenceArrayInput
          source="hosts"
          reference="Host"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HostTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="identityProvider"
          label="Identity Provider"
          choices={[
            { label: "CAL", value: "CAL" },
            { label: "GOOGLE", value: "GOOGLE" },
            { label: "SAML", value: "SAML" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Identity Provider Id" source="identityProviderId" />
        <ReferenceArrayInput
          source="impersonatedBy"
          reference="Impersonation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImpersonationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="impersonatedUsers"
          reference="Impersonation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImpersonationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Invited To" source="invitedTo" />
        <TextInput label="Locale" source="locale" />
        <BooleanInput label="Locked" source="locked" />
        <div />
        <ReferenceInput
          source="movedToProfile.id"
          reference="Profile"
          label="Moved To Profile"
        >
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="organization.id"
          reference="Team"
          label="Organization"
        >
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="ownedEventTypes"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="password.id"
          reference="UserPassword"
          label="Password"
        >
          <SelectInput optionText={UserPasswordTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="profiles"
          reference="Profile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfileTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Receive Monthly Digest Email"
          source="receiveMonthlyDigestEmail"
        />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "USER", value: "USER" },
            { label: "ADMIN", value: "ADMIN" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="routingForms"
          reference="AppRoutingFormsForm"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppRoutingFormsFormTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="schedules"
          reference="Schedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="selectedCalendars"
          reference="SelectedCalendar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SelectedCalendarTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Start Time" source="startTime" />
        <ReferenceArrayInput
          source="teams"
          reference="Membership"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MembershipTitle} />
        </ReferenceArrayInput>
        <TextInput label="Theme" source="theme" />
        <NumberInput step={1} label="Time Format" source="timeFormat" />
        <TextInput label="Time Zone" source="timeZone" />
        <DateTimeInput label="Trial Ends At" source="trialEndsAt" />
        <BooleanInput label="Two Factor Enabled" source="twoFactorEnabled" />
        <TextInput label="Two Factor Secret" source="twoFactorSecret" />
        <TextInput label="Username" source="username" />
        <BooleanInput label="Verified" source="verified" />
        <ReferenceArrayInput
          source="verifiedNumbers"
          reference="VerifiedNumber"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VerifiedNumberTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="webhooks"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
        <TextInput label="Week Start" source="weekStart" />
        <ReferenceArrayInput
          source="workflows"
          reference="Workflow"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
