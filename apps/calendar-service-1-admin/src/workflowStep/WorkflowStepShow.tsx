import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { WORKFLOWSTEP_TITLE_FIELD } from "./WorkflowStepTitle";
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";

export const WorkflowStepShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="WorkflowReminder"
          target="workflowStepId"
          label="WorkflowReminders"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Cancelled" source="cancelled" />
            <TextField label="ID" source="id" />
            <BooleanField
              label="Is Mandatory Reminder"
              source="isMandatoryReminder"
            />
            <TextField label="Method" source="method" />
            <TextField label="Reference Id" source="referenceId" />
            <BooleanField label="Scheduled" source="scheduled" />
            <TextField label="Scheduled Date" source="scheduledDate" />
            <TextField label="Seat Reference Id" source="seatReferenceId" />
            <ReferenceField
              label="Workflow Step"
              source="workflowstep.id"
              reference="WorkflowStep"
            >
              <TextField source={WORKFLOWSTEP_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
