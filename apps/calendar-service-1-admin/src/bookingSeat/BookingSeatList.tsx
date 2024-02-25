import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ATTENDEE_TITLE_FIELD } from "../attendee/AttendeeTitle";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const BookingSeatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BookingSeats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
