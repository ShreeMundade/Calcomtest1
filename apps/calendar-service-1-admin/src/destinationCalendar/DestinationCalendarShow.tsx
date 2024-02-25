import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
  BooleanField,
} from "react-admin";

import { DESTINATIONCALENDAR_TITLE_FIELD } from "./DestinationCalendarTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { INSTANTMEETINGTOKEN_TITLE_FIELD } from "../instantMeetingToken/InstantMeetingTokenTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CREDENTIAL_TITLE_FIELD } from "../credential/CredentialTitle";

export const DestinationCalendarShow = (
  props: ShowProps
): React.ReactElement => {
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
        <ReferenceManyField
          reference="Booking"
          target="destinationCalendarId"
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
      </SimpleShowLayout>
    </Show>
  );
};
