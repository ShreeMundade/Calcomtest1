import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { EVENTTYPE_TITLE_FIELD } from "./EventTypeTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { INSTANTMEETINGTOKEN_TITLE_FIELD } from "../instantMeetingToken/InstantMeetingTokenTitle";
import { HASHEDLINK_TITLE_FIELD } from "../hashedLink/HashedLinkTitle";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";

export const EventTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <BooleanField label="Hide Calendar Notes" source="hideCalendarNotes" />
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
        <ReferenceField label="Profile" source="profile.id" reference="Profile">
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
        <TextField label="Success Redirect Url" source="successRedirectUrl" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Time Zone" source="timeZone" />
        <TextField label="Title" source="title" />
        <BooleanField
          label="Use Event Type Destination Calendar Email"
          source="useEventTypeDestinationCalendarEmail"
        />
        <ReferenceManyField
          reference="Availability"
          target="eventTypeId"
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
          reference="Booking"
          target="eventTypeId"
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
          reference="EventType"
          target="parentId"
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
          reference="EventTypeCustomInput"
          target="eventTypeId"
          label="EventTypeCustomInputs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Label" source="label" />
            <TextField label="Options" source="options" />
            <TextField label="Placeholder" source="placeholder" />
            <BooleanField label="Required" source="required" />
            <TextField label="Type" source="type" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Host" target="eventTypeId" label="Hosts">
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
          reference="Webhook"
          target="eventTypeId"
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
          reference="WorkflowsOnEventType"
          target="eventTypeId"
          label="WorkflowsOnEventTypes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Workflow"
              source="workflow.id"
              reference="Workflow"
            >
              <TextField source={WORKFLOW_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
