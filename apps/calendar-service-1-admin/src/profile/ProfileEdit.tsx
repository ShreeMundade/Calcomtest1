import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { UserTitle } from "../user/UserTitle";
import { TeamTitle } from "../team/TeamTitle";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="eventTypes"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="movedFromUser.id"
          reference="User"
          label="Moved From User"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Team"
          label="Organization"
        >
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="Uid" source="uid" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
