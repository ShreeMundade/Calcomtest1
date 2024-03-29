import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { BOOKINGSEAT_TITLE_FIELD } from "../bookingSeat/BookingSeatTitle";

export const AttendeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Booking Seat"
          source="bookingseat.id"
          reference="BookingSeat"
        >
          <TextField source={BOOKINGSEAT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Locale" source="locale" />
        <TextField label="Name" source="name" />
        <TextField label="Time Zone" source="timeZone" />
      </SimpleShowLayout>
    </Show>
  );
};
