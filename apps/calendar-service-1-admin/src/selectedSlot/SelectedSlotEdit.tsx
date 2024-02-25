import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SelectedSlotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Event Type Id" source="eventTypeId" />
        <BooleanInput label="Is Seat" source="isSeat" />
        <DateTimeInput label="Release At" source="releaseAt" />
        <DateTimeInput label="Slot Utc End Date" source="slotUtcEndDate" />
        <DateTimeInput label="Slot Utc Start Date" source="slotUtcStartDate" />
        <TextInput label="Uid" source="uid" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
