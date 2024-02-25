import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SelectedSlotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Event Type Id" source="eventTypeId" />
        <BooleanInput label="Is Seat" source="isSeat" />
        <DateTimeInput label="Release At" source="releaseAt" />
        <DateTimeInput label="Slot Utc End Date" source="slotUtcEndDate" />
        <DateTimeInput label="Slot Utc Start Date" source="slotUtcStartDate" />
        <TextInput label="Uid" source="uid" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
