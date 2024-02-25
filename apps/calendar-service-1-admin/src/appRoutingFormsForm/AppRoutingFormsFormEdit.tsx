import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AppRoutingFormsFormResponseTitle } from "../appRoutingFormsFormResponse/AppRoutingFormsFormResponseTitle";
import { TeamTitle } from "../team/TeamTitle";
import { UserTitle } from "../user/UserTitle";

export const AppRoutingFormsFormEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <BooleanInput label="Disabled" source="disabled" />
        <div />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Position" source="position" />
        <ReferenceArrayInput
          source="responses"
          reference="AppRoutingFormsFormResponse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppRoutingFormsFormResponseTitle} />
        </ReferenceArrayInput>
        <div />
        <div />
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
