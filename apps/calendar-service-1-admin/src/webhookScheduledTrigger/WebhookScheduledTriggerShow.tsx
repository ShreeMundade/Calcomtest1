import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const WebhookScheduledTriggerShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Job Name" source="jobName" />
        <TextField label="Payload" source="payload" />
        <TextField label="Retry Count" source="retryCount" />
        <TextField label="Start After" source="startAfter" />
        <TextField label="Subscriber Url" source="subscriberUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
