import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { AccessCodeTitle } from "../accessCode/AccessCodeTitle";
import { ApiKeyTitle } from "../apiKey/ApiKeyTitle";
import { TeamTitle } from "./TeamTitle";
import { CredentialTitle } from "../credential/CredentialTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { InstantMeetingTokenTitle } from "../instantMeetingToken/InstantMeetingTokenTitle";
import { VerificationTokenTitle } from "../verificationToken/VerificationTokenTitle";
import { MembershipTitle } from "../membership/MembershipTitle";
import { ProfileTitle } from "../profile/ProfileTitle";
import { UserTitle } from "../user/UserTitle";
import { AppRoutingFormsFormTitle } from "../appRoutingFormsForm/AppRoutingFormsFormTitle";
import { VerifiedNumberTitle } from "../verifiedNumber/VerifiedNumberTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";
import { WorkflowTitle } from "../workflow/WorkflowTitle";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accessCodes"
          reference="AccessCode"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessCodeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="apiKeys"
          reference="ApiKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiKeyTitle} />
        </ReferenceArrayInput>
        <TextInput label="App Icon Logo" source="appIconLogo" />
        <TextInput label="App Logo" source="appLogo" />
        <TextInput label="Bio" source="bio" />
        <TextInput label="Brand Color" source="brandColor" />
        <TextInput label="Cal Video Logo" source="calVideoLogo" />
        <ReferenceArrayInput
          source="children"
          reference="Team"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="credentials"
          reference="Credential"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CredentialTitle} />
        </ReferenceArrayInput>
        <TextInput label="Dark Brand Color" source="darkBrandColor" />
        <ReferenceArrayInput
          source="eventTypes"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Hide Book A Team Member"
          source="hideBookATeamMember"
        />
        <BooleanInput label="Hide Branding" source="hideBranding" />
        <ReferenceArrayInput
          source="instantMeetingTokens"
          reference="InstantMeetingToken"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InstantMeetingTokenTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inviteTokens"
          reference="VerificationToken"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VerificationTokenTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Private" source="isPrivate" />
        <TextInput label="Logo" source="logo" />
        <TextInput label="Logo Url" source="logoUrl" />
        <ReferenceArrayInput
          source="members"
          reference="Membership"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MembershipTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="orgProfiles"
          reference="Profile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="orgUsers"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="parent.id" reference="Team" label="Parent">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <BooleanInput label="Pending Payment" source="pendingPayment" />
        <ReferenceArrayInput
          source="routingForms"
          reference="AppRoutingFormsForm"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppRoutingFormsFormTitle} />
        </ReferenceArrayInput>
        <TextInput label="Slug" source="slug" />
        <TextInput label="Theme" source="theme" />
        <NumberInput step={1} label="Time Format" source="timeFormat" />
        <TextInput label="Time Zone" source="timeZone" />
        <ReferenceArrayInput
          source="verifiedNumbers"
          reference="VerifiedNumber"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VerifiedNumberTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="webhooks"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
        <TextInput label="Week Start" source="weekStart" />
        <ReferenceArrayInput
          source="workflows"
          reference="Workflow"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
