import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const WebhookScheduledTriggerEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Job Name" source="jobName" />
        <TextInput label="Payload" source="payload" />
        <NumberInput step={1} label="Retry Count" source="retryCount" />
        <DateTimeInput label="Start After" source="startAfter" />
        <TextInput label="Subscriber Url" source="subscriberUrl" />
      </SimpleForm>
    </Edit>
  );
};
