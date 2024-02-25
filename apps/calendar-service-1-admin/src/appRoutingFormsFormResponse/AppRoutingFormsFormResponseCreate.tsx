import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AppRoutingFormsFormTitle } from "../appRoutingFormsForm/AppRoutingFormsFormTitle";

export const AppRoutingFormsFormResponseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
