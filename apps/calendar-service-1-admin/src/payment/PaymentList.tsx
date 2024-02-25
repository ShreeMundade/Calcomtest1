import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amount" source="amount" />
        <ReferenceField
          label="App Field"
          source="appmodel.id"
          reference="AppModel"
        >
          <TextField source={APPMODEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Currency" source="currency" />
        <TextField label="Data" source="data" />
        <TextField label="External Id" source="externalId" />
        <TextField label="Fee" source="fee" />
        <TextField label="ID" source="id" />
        <TextField label="Payment Option" source="paymentOption" />
        <BooleanField label="Refunded" source="refunded" />
        <BooleanField label="Success" source="success" />
        <TextField label="Uid" source="uid" />
      </Datagrid>
    </List>
  );
};
