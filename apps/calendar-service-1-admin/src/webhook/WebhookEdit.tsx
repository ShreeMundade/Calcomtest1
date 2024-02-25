import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppModelTitle } from "../appModel/AppModelTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { TeamTitle } from "../team/TeamTitle";
import { UserTitle } from "../user/UserTitle";

export const WebhookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <ReferenceInput
          source="appField.id"
          reference="AppModel"
          label="App Field"
        >
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
        <SelectArrayInput
          label="Event Triggers"
          source="eventTriggers"
          choices={[
            { label: "BOOKING_CREATED", value: "BOOKING_CREATED" },
            {
              label: "BOOKING_PAYMENT_INITIATED",
              value: "BOOKING_PAYMENT_INITIATED",
            },
            { label: "BOOKING_PAID", value: "BOOKING_PAID" },
            { label: "BOOKING_RESCHEDULED", value: "BOOKING_RESCHEDULED" },
            { label: "BOOKING_REQUESTED", value: "BOOKING_REQUESTED" },
            { label: "BOOKING_CANCELLED", value: "BOOKING_CANCELLED" },
            { label: "BOOKING_REJECTED", value: "BOOKING_REJECTED" },
            { label: "FORM_SUBMITTED", value: "FORM_SUBMITTED" },
            { label: "MEETING_ENDED", value: "MEETING_ENDED" },
            { label: "MEETING_STARTED", value: "MEETING_STARTED" },
            { label: "RECORDING_READY", value: "RECORDING_READY" },
            { label: "INSTANT_MEETING", value: "INSTANT_MEETING" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <TextInput label="Payload Template" source="payloadTemplate" />
        <TextInput label="Secret" source="secret" />
        <TextInput label="Subscriber Url" source="subscriberUrl" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
