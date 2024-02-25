import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AvatarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Data" source="data" />
        <TextField label="ID" source="id" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="User Id" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
