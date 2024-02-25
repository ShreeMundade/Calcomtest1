import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const SelectedSlotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Event Type Id" source="eventTypeId" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Seat" source="isSeat" />
        <TextField label="Release At" source="releaseAt" />
        <TextField label="Slot Utc End Date" source="slotUtcEndDate" />
        <TextField label="Slot Utc Start Date" source="slotUtcStartDate" />
        <TextField label="Uid" source="uid" />
        <TextField label="User Id" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
