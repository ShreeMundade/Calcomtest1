import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AppModelTitle } from "../appModel/AppModelTitle";
import { BookingTitle } from "../booking/BookingTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Amount" source="amount" />
        <ReferenceInput
          source="appField.id"
          reference="AppModel"
          label="App Field"
        >
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="Currency" source="currency" />
        <div />
        <TextInput label="External Id" source="externalId" />
        <NumberInput step={1} label="Fee" source="fee" />
        <SelectInput
          source="paymentOption"
          label="Payment Option"
          choices={[
            { label: "ON_BOOKING", value: "ON_BOOKING" },
            { label: "HOLD", value: "HOLD" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="Refunded" source="refunded" />
        <BooleanInput label="Success" source="success" />
        <TextInput label="Uid" source="uid" />
      </SimpleForm>
    </Edit>
  );
};
