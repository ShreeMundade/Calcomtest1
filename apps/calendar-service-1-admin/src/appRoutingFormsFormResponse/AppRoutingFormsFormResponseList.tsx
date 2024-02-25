import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPROUTINGFORMSFORM_TITLE_FIELD } from "../appRoutingFormsForm/AppRoutingFormsFormTitle";

export const AppRoutingFormsFormResponseList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AppRoutingFormsFormResponses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Form"
          source="approutingformsform.id"
          reference="AppRoutingFormsForm"
        >
          <TextField source={APPROUTINGFORMSFORM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Form Filler Id" source="formFillerId" />
        <TextField label="ID" source="id" />
        <TextField label="Response" source="response" />
      </Datagrid>
    </List>
  );
};
