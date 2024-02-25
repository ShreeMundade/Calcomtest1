import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AppRoutingFormsFormTitle } from "../appRoutingFormsForm/AppRoutingFormsFormTitle";

export const AppRoutingFormsFormResponseEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="form.id"
          reference="AppRoutingFormsForm"
          label="Form"
        >
          <SelectInput optionText={AppRoutingFormsFormTitle} />
        </ReferenceInput>
        <TextInput label="Form Filler Id" source="formFillerId" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
