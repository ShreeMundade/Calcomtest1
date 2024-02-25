import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { AvailabilityTitle } from "../availability/AvailabilityTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { EventTypeTitle } from "./EventTypeTitle";
import { EventTypeCustomInputTitle } from "../eventTypeCustomInput/EventTypeCustomInputTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { HashedLinkTitle } from "../hashedLink/HashedLinkTitle";
import { HostTitle } from "../host/HostTitle";
import { UserTitle } from "../user/UserTitle";
import { ProfileTitle } from "../profile/ProfileTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { TeamTitle } from "../team/TeamTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";
import { WorkflowsOnEventTypeTitle } from "../workflowsOnEventType/WorkflowsOnEventTypeTitle";

export const EventTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="After Event Buffer"
          source="afterEventBuffer"
        />
        <BooleanInput
          label="Assign All Team Members"
          source="assignAllTeamMembers"
        />
        <ReferenceArrayInput
          source="availability"
          reference="Availability"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AvailabilityTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Before Event Buffer"
          source="beforeEventBuffer"
        />
        <div />
        <div />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="children"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Currency" source="currency" />
        <ReferenceArrayInput
          source="customInputs"
          reference="EventTypeCustomInput"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeCustomInputTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="destinationCalendar.id"
          reference="DestinationCalendar"
          label="Destination Calendar"
        >
          <SelectInput optionText={DestinationCalendarTitle} />
        </ReferenceInput>
        <BooleanInput label="Disable Guests" source="disableGuests" />
        <div />
        <TextInput label="Event Name" source="eventName" />
        <ReferenceInput
          source="hashedLink.id"
          reference="HashedLink"
          label="Hashed Link"
        >
          <SelectInput optionText={HashedLinkTitle} />
        </ReferenceInput>
        <BooleanInput label="Hidden" source="hidden" />
        <BooleanInput label="Hide Calendar Notes" source="hideCalendarNotes" />
        <ReferenceArrayInput
          source="hosts"
          reference="Host"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HostTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Instant Event" source="isInstantEvent" />
        <NumberInput step={1} label="Length" source="length" />
        <div />
        <BooleanInput
          label="Lock Time Zone Toggle On Booking Page"
          source="lockTimeZoneToggleOnBookingPage"
        />
        <div />
        <NumberInput
          step={1}
          label="Minimum Booking Notice"
          source="minimumBookingNotice"
        />
        <NumberInput step={1} label="Offset Start" source="offsetStart" />
        <BooleanInput
          label="Only Show First Available Slot"
          source="onlyShowFirstAvailableSlot"
        />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="parent.id" reference="EventType" label="Parent">
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <BooleanInput
          label="Period Count Calendar Days"
          source="periodCountCalendarDays"
        />
        <NumberInput step={1} label="Period Days" source="periodDays" />
        <DateTimeInput label="Period End Date" source="periodEndDate" />
        <DateTimeInput label="Period Start Date" source="periodStartDate" />
        <SelectInput
          source="periodType"
          label="Period Type"
          choices={[
            { label: "UNLIMITED", value: "UNLIMITED" },
            { label: "ROLLING", value: "ROLLING" },
            { label: "RANGE", value: "RANGE" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Position" source="position" />
        <NumberInput step={1} label="Price" source="price" />
        <ReferenceInput source="profile.id" reference="Profile" label="Profile">
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <div />
        <BooleanInput
          label="Requires Booker Email Verification"
          source="requiresBookerEmailVerification"
        />
        <BooleanInput
          label="Requires Confirmation"
          source="requiresConfirmation"
        />
        <ReferenceInput
          source="schedule.id"
          reference="Schedule"
          label="Schedule"
        >
          <SelectInput optionText={ScheduleTitle} />
        </ReferenceInput>
        <SelectInput
          source="schedulingType"
          label="Scheduling Type"
          choices={[
            { label: "ROUND_ROBIN", value: "ROUND_ROBIN" },
            { label: "COLLECTIVE", value: "COLLECTIVE" },
            { label: "MANAGED", value: "MANAGED" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="Seats Per Time Slot"
          source="seatsPerTimeSlot"
        />
        <BooleanInput
          label="Seats Show Attendees"
          source="seatsShowAttendees"
        />
        <BooleanInput
          label="Seats Show Availability Count"
          source="seatsShowAvailabilityCount"
        />
        <NumberInput step={1} label="Slot Interval" source="slotInterval" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Success Redirect Url" source="successRedirectUrl" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="Time Zone" source="timeZone" />
        <TextInput label="Title" source="title" />
        <BooleanInput
          label="Use Event Type Destination Calendar Email"
          source="useEventTypeDestinationCalendarEmail"
        />
        <ReferenceArrayInput
          source="webhooks"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workflows"
          reference="WorkflowsOnEventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowsOnEventTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
