import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AppModelTitle } from "../appModel/AppModelTitle";
import { CalendarCacheTitle } from "../calendarCache/CalendarCacheTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { SelectedCalendarTitle } from "../selectedCalendar/SelectedCalendarTitle";
import { TeamTitle } from "../team/TeamTitle";
import { UserTitle } from "../user/UserTitle";

export const CredentialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appField.id"
          reference="AppModel"
          label="App Field"
        >
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Billing Cycle Start"
          source="billingCycleStart"
        />
        <ReferenceArrayInput
          source="calendarCache"
          reference="CalendarCache"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CalendarCacheTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="destinationCalendars"
          reference="DestinationCalendar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DestinationCalendarTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Invalid" source="invalid" />
        <div />
        <TextInput label="Payment Status" source="paymentStatus" />
        <ReferenceArrayInput
          source="selectedCalendars"
          reference="SelectedCalendar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SelectedCalendarTitle} />
        </ReferenceArrayInput>
        <TextInput label="Subscription Id" source="subscriptionId" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="Type Field" source="typeField" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
