import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { TeamTitle } from "../team/TeamTitle";

export const InstantMeetingTokenCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <DateTimeInput label="Expires" source="expires" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="Token" source="token" />
      </SimpleForm>
    </Create>
  );
};
