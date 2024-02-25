import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Event Type"
          source="eventtype.id"
          reference="EventType"
        >
          <TextField source={EVENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Fixed" source="isFixed" />
        <TextField label="Priority" source="priority" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
