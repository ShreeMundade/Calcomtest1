import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { JobTitle } from "../job/JobTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="User" label="Client">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Content" source="content" />
        <ReferenceInput
          source="freelancer.id"
          reference="User"
          label="Freelancer"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
