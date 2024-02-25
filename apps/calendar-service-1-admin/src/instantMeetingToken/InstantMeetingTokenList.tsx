import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const InstantMeetingTokenList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InstantMeetingTokens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Expires" source="expires" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
