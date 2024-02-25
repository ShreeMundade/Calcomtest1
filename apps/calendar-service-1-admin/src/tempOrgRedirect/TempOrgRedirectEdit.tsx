import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const TempOrgRedirectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Enabled" source="enabled" />
        <TextInput label="From Field" source="fromField" />
        <NumberInput step={1} label="From Org Id" source="fromOrgId" />
        <TextInput label="To Url" source="toUrl" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "UserEventType", value: "UserEventType" },
            { label: "TeamEventType", value: "TeamEventType" },
            { label: "User", value: "User" },
            { label: "Team", value: "Team" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
