import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";

export const WorkflowStepList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkflowSteps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Action" source="action" />
        <TextField label="Email Subject" source="emailSubject" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="Include Calendar Event"
          source="includeCalendarEvent"
        />
        <BooleanField label="Number Required" source="numberRequired" />
        <BooleanField
          label="Number Verification Pending"
          source="numberVerificationPending"
        />
        <TextField label="Reminder Body" source="reminderBody" />
        <TextField label="Sender" source="sender" />
        <TextField label="Send To" source="sendTo" />
        <TextField label="Step Number" source="stepNumber" />
        <TextField label="Template" source="template" />
        <ReferenceField
          label="Workflow"
          source="workflow.id"
          reference="Workflow"
        >
          <TextField source={WORKFLOW_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
