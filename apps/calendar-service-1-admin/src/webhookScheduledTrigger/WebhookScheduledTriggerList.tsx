import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WebhookScheduledTriggerList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WebhookScheduledTriggers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Job Name" source="jobName" />
        <TextField label="Payload" source="payload" />
        <TextField label="Retry Count" source="retryCount" />
        <TextField label="Start After" source="startAfter" />
        <TextField label="Subscriber Url" source="subscriberUrl" />
      </Datagrid>
    </List>
  );
};
