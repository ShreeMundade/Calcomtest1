import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const FeatureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <BooleanInput label="Enabled" source="enabled" />
        <DateTimeInput label="Last Used At" source="lastUsedAt" />
        <BooleanInput label="Stale" source="stale" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "RELEASE", value: "RELEASE" },
            { label: "EXPERIMENT", value: "EXPERIMENT" },
            { label: "OPERATIONAL", value: "OPERATIONAL" },
            { label: "KILL_SWITCH", value: "KILL_SWITCH" },
            { label: "PERMISSION", value: "PERMISSION" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
