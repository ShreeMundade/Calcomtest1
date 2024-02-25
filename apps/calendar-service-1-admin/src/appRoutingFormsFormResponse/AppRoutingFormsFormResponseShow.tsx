import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPROUTINGFORMSFORM_TITLE_FIELD } from "../appRoutingFormsForm/AppRoutingFormsFormTitle";

export const AppRoutingFormsFormResponseShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
