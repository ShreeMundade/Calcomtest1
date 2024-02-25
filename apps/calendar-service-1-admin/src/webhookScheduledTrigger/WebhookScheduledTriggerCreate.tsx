import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const WebhookScheduledTriggerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Job Name" source="jobName" />
        <TextInput label="Payload" source="payload" />
        <NumberInput step={1} label="Retry Count" source="retryCount" />
        <DateTimeInput label="Start After" source="startAfter" />
        <TextInput label="Subscriber Url" source="subscriberUrl" />
      </SimpleForm>
    </Create>
  );
};
