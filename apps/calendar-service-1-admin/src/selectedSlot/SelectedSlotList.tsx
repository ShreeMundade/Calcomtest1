import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const SelectedSlotList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SelectedSlots"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Event Type Id" source="eventTypeId" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Seat" source="isSeat" />
        <TextField label="Release At" source="releaseAt" />
        <TextField label="Slot Utc End Date" source="slotUtcEndDate" />
        <TextField label="Slot Utc Start Date" source="slotUtcStartDate" />
        <TextField label="Uid" source="uid" />
        <TextField label="User Id" source="userId" />
      </Datagrid>
    </List>
  );
};
