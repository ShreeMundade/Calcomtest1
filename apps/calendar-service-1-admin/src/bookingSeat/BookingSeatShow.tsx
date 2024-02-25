import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { ATTENDEE_TITLE_FIELD } from "../attendee/AttendeeTitle";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const BookingSeatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Attendee"
          source="attendee.id"
          reference="Attendee"
        >
          <TextField source={ATTENDEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Data" source="data" />
        <TextField label="ID" source="id" />
        <TextField label="Reference Uid" source="referenceUid" />
      </SimpleShowLayout>
    </Show>
  );
};
