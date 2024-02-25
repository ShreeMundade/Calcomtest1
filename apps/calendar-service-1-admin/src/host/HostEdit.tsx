import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { UserTitle } from "../user/UserTitle";

export const HostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Fixed" source="isFixed" />
        <NumberInput step={1} label="Priority" source="priority" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
