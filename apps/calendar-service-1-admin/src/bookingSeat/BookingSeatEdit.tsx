import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AttendeeTitle } from "../attendee/AttendeeTitle";
import { BookingTitle } from "../booking/BookingTitle";

export const BookingSeatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attendee.id"
          reference="Attendee"
          label="Attendee"
        >
          <SelectInput optionText={AttendeeTitle} />
        </ReferenceInput>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="Reference Uid" source="referenceUid" />
      </SimpleForm>
    </Edit>
  );
};
