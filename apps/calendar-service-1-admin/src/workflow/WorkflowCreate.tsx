import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WorkflowsOnEventTypeTitle } from "../workflowsOnEventType/WorkflowsOnEventTypeTitle";
import { WorkflowStepTitle } from "../workflowStep/WorkflowStepTitle";
import { TeamTitle } from "../team/TeamTitle";
import { UserTitle } from "../user/UserTitle";

export const WorkflowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="activeOn"
          reference="WorkflowsOnEventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowsOnEventTypeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Position" source="position" />
        <ReferenceArrayInput
          source="steps"
          reference="WorkflowStep"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowStepTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Time" source="time" />
        <SelectInput
          source="timeUnit"
          label="Time Unit"
          choices={[
            { label: "DAY", value: "DAY" },
            { label: "HOUR", value: "HOUR" },
            { label: "MINUTE", value: "MINUTE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="trigger"
          label="Trigger"
          choices={[
            { label: "BEFORE_EVENT", value: "BEFORE_EVENT" },
            { label: "EVENT_CANCELLED", value: "EVENT_CANCELLED" },
            { label: "NEW_EVENT", value: "NEW_EVENT" },
            { label: "AFTER_EVENT", value: "AFTER_EVENT" },
            { label: "RESCHEDULE_EVENT", value: "RESCHEDULE_EVENT" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
