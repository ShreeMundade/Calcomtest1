import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const BookingReferenceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Credential Id" source="credentialId" />
        <BooleanInput label="Deleted" source="deleted" />
        <TextInput label="External Calendar Id" source="externalCalendarId" />
        <TextInput label="Meeting Id" source="meetingId" />
        <TextInput label="Meeting Password" source="meetingPassword" />
        <TextInput label="Meeting Url" source="meetingUrl" />
        <TextInput
          label="Third Party Recurring Event Id"
          source="thirdPartyRecurringEventId"
        />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Uid" source="uid" />
      </SimpleForm>
    </Create>
  );
};
