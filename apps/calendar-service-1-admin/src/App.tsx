import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HostList } from "./host/HostList";
import { HostCreate } from "./host/HostCreate";
import { HostEdit } from "./host/HostEdit";
import { HostShow } from "./host/HostShow";
import { EventTypeList } from "./eventType/EventTypeList";
import { EventTypeCreate } from "./eventType/EventTypeCreate";
import { EventTypeEdit } from "./eventType/EventTypeEdit";
import { EventTypeShow } from "./eventType/EventTypeShow";
import { CredentialList } from "./credential/CredentialList";
import { CredentialCreate } from "./credential/CredentialCreate";
import { CredentialEdit } from "./credential/CredentialEdit";
import { CredentialShow } from "./credential/CredentialShow";
import { DestinationCalendarList } from "./destinationCalendar/DestinationCalendarList";
import { DestinationCalendarCreate } from "./destinationCalendar/DestinationCalendarCreate";
import { DestinationCalendarEdit } from "./destinationCalendar/DestinationCalendarEdit";
import { DestinationCalendarShow } from "./destinationCalendar/DestinationCalendarShow";
import { UserPasswordList } from "./userPassword/UserPasswordList";
import { UserPasswordCreate } from "./userPassword/UserPasswordCreate";
import { UserPasswordEdit } from "./userPassword/UserPasswordEdit";
import { UserPasswordShow } from "./userPassword/UserPasswordShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { MembershipList } from "./membership/MembershipList";
import { MembershipCreate } from "./membership/MembershipCreate";
import { MembershipEdit } from "./membership/MembershipEdit";
import { MembershipShow } from "./membership/MembershipShow";
import { VerificationTokenList } from "./verificationToken/VerificationTokenList";
import { VerificationTokenCreate } from "./verificationToken/VerificationTokenCreate";
import { VerificationTokenEdit } from "./verificationToken/VerificationTokenEdit";
import { VerificationTokenShow } from "./verificationToken/VerificationTokenShow";
import { InstantMeetingTokenList } from "./instantMeetingToken/InstantMeetingTokenList";
import { InstantMeetingTokenCreate } from "./instantMeetingToken/InstantMeetingTokenCreate";
import { InstantMeetingTokenEdit } from "./instantMeetingToken/InstantMeetingTokenEdit";
import { InstantMeetingTokenShow } from "./instantMeetingToken/InstantMeetingTokenShow";
import { BookingReferenceList } from "./bookingReference/BookingReferenceList";
import { BookingReferenceCreate } from "./bookingReference/BookingReferenceCreate";
import { BookingReferenceEdit } from "./bookingReference/BookingReferenceEdit";
import { BookingReferenceShow } from "./bookingReference/BookingReferenceShow";
import { AttendeeList } from "./attendee/AttendeeList";
import { AttendeeCreate } from "./attendee/AttendeeCreate";
import { AttendeeEdit } from "./attendee/AttendeeEdit";
import { AttendeeShow } from "./attendee/AttendeeShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { ScheduleList } from "./schedule/ScheduleList";
import { ScheduleCreate } from "./schedule/ScheduleCreate";
import { ScheduleEdit } from "./schedule/ScheduleEdit";
import { ScheduleShow } from "./schedule/ScheduleShow";
import { AvailabilityList } from "./availability/AvailabilityList";
import { AvailabilityCreate } from "./availability/AvailabilityCreate";
import { AvailabilityEdit } from "./availability/AvailabilityEdit";
import { AvailabilityShow } from "./availability/AvailabilityShow";
import { SelectedCalendarList } from "./selectedCalendar/SelectedCalendarList";
import { SelectedCalendarCreate } from "./selectedCalendar/SelectedCalendarCreate";
import { SelectedCalendarEdit } from "./selectedCalendar/SelectedCalendarEdit";
import { SelectedCalendarShow } from "./selectedCalendar/SelectedCalendarShow";
import { EventTypeCustomInputList } from "./eventTypeCustomInput/EventTypeCustomInputList";
import { EventTypeCustomInputCreate } from "./eventTypeCustomInput/EventTypeCustomInputCreate";
import { EventTypeCustomInputEdit } from "./eventTypeCustomInput/EventTypeCustomInputEdit";
import { EventTypeCustomInputShow } from "./eventTypeCustomInput/EventTypeCustomInputShow";
import { ResetPasswordRequestList } from "./resetPasswordRequest/ResetPasswordRequestList";
import { ResetPasswordRequestCreate } from "./resetPasswordRequest/ResetPasswordRequestCreate";
import { ResetPasswordRequestEdit } from "./resetPasswordRequest/ResetPasswordRequestEdit";
import { ResetPasswordRequestShow } from "./resetPasswordRequest/ResetPasswordRequestShow";
import { ReminderMailList } from "./reminderMail/ReminderMailList";
import { ReminderMailCreate } from "./reminderMail/ReminderMailCreate";
import { ReminderMailEdit } from "./reminderMail/ReminderMailEdit";
import { ReminderMailShow } from "./reminderMail/ReminderMailShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { WebhookList } from "./webhook/WebhookList";
import { WebhookCreate } from "./webhook/WebhookCreate";
import { WebhookEdit } from "./webhook/WebhookEdit";
import { WebhookShow } from "./webhook/WebhookShow";
import { ImpersonationList } from "./impersonation/ImpersonationList";
import { ImpersonationCreate } from "./impersonation/ImpersonationCreate";
import { ImpersonationEdit } from "./impersonation/ImpersonationEdit";
import { ImpersonationShow } from "./impersonation/ImpersonationShow";
import { ApiKeyList } from "./apiKey/ApiKeyList";
import { ApiKeyCreate } from "./apiKey/ApiKeyCreate";
import { ApiKeyEdit } from "./apiKey/ApiKeyEdit";
import { ApiKeyShow } from "./apiKey/ApiKeyShow";
import { HashedLinkList } from "./hashedLink/HashedLinkList";
import { HashedLinkCreate } from "./hashedLink/HashedLinkCreate";
import { HashedLinkEdit } from "./hashedLink/HashedLinkEdit";
import { HashedLinkShow } from "./hashedLink/HashedLinkShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { AppModelList } from "./appModel/AppModelList";
import { AppModelCreate } from "./appModel/AppModelCreate";
import { AppModelEdit } from "./appModel/AppModelEdit";
import { AppModelShow } from "./appModel/AppModelShow";
import { AppRoutingFormsFormList } from "./appRoutingFormsForm/AppRoutingFormsFormList";
import { AppRoutingFormsFormCreate } from "./appRoutingFormsForm/AppRoutingFormsFormCreate";
import { AppRoutingFormsFormEdit } from "./appRoutingFormsForm/AppRoutingFormsFormEdit";
import { AppRoutingFormsFormShow } from "./appRoutingFormsForm/AppRoutingFormsFormShow";
import { AppRoutingFormsFormResponseList } from "./appRoutingFormsFormResponse/AppRoutingFormsFormResponseList";
import { AppRoutingFormsFormResponseCreate } from "./appRoutingFormsFormResponse/AppRoutingFormsFormResponseCreate";
import { AppRoutingFormsFormResponseEdit } from "./appRoutingFormsFormResponse/AppRoutingFormsFormResponseEdit";
import { AppRoutingFormsFormResponseShow } from "./appRoutingFormsFormResponse/AppRoutingFormsFormResponseShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { WorkflowStepList } from "./workflowStep/WorkflowStepList";
import { WorkflowStepCreate } from "./workflowStep/WorkflowStepCreate";
import { WorkflowStepEdit } from "./workflowStep/WorkflowStepEdit";
import { WorkflowStepShow } from "./workflowStep/WorkflowStepShow";
import { WorkflowList } from "./workflow/WorkflowList";
import { WorkflowCreate } from "./workflow/WorkflowCreate";
import { WorkflowEdit } from "./workflow/WorkflowEdit";
import { WorkflowShow } from "./workflow/WorkflowShow";
import { WorkflowsOnEventTypeList } from "./workflowsOnEventType/WorkflowsOnEventTypeList";
import { WorkflowsOnEventTypeCreate } from "./workflowsOnEventType/WorkflowsOnEventTypeCreate";
import { WorkflowsOnEventTypeEdit } from "./workflowsOnEventType/WorkflowsOnEventTypeEdit";
import { WorkflowsOnEventTypeShow } from "./workflowsOnEventType/WorkflowsOnEventTypeShow";
import { DeploymentList } from "./deployment/DeploymentList";
import { DeploymentCreate } from "./deployment/DeploymentCreate";
import { DeploymentEdit } from "./deployment/DeploymentEdit";
import { DeploymentShow } from "./deployment/DeploymentShow";
import { WorkflowReminderList } from "./workflowReminder/WorkflowReminderList";
import { WorkflowReminderCreate } from "./workflowReminder/WorkflowReminderCreate";
import { WorkflowReminderEdit } from "./workflowReminder/WorkflowReminderEdit";
import { WorkflowReminderShow } from "./workflowReminder/WorkflowReminderShow";
import { WebhookScheduledTriggerList } from "./webhookScheduledTrigger/WebhookScheduledTriggerList";
import { WebhookScheduledTriggerCreate } from "./webhookScheduledTrigger/WebhookScheduledTriggerCreate";
import { WebhookScheduledTriggerEdit } from "./webhookScheduledTrigger/WebhookScheduledTriggerEdit";
import { WebhookScheduledTriggerShow } from "./webhookScheduledTrigger/WebhookScheduledTriggerShow";
import { BookingSeatList } from "./bookingSeat/BookingSeatList";
import { BookingSeatCreate } from "./bookingSeat/BookingSeatCreate";
import { BookingSeatEdit } from "./bookingSeat/BookingSeatEdit";
import { BookingSeatShow } from "./bookingSeat/BookingSeatShow";
import { VerifiedNumberList } from "./verifiedNumber/VerifiedNumberList";
import { VerifiedNumberCreate } from "./verifiedNumber/VerifiedNumberCreate";
import { VerifiedNumberEdit } from "./verifiedNumber/VerifiedNumberEdit";
import { VerifiedNumberShow } from "./verifiedNumber/VerifiedNumberShow";
import { FeatureList } from "./feature/FeatureList";
import { FeatureCreate } from "./feature/FeatureCreate";
import { FeatureEdit } from "./feature/FeatureEdit";
import { FeatureShow } from "./feature/FeatureShow";
import { SelectedSlotList } from "./selectedSlot/SelectedSlotList";
import { SelectedSlotCreate } from "./selectedSlot/SelectedSlotCreate";
import { SelectedSlotEdit } from "./selectedSlot/SelectedSlotEdit";
import { SelectedSlotShow } from "./selectedSlot/SelectedSlotShow";
import { OAuthClientList } from "./oAuthClient/OAuthClientList";
import { OAuthClientCreate } from "./oAuthClient/OAuthClientCreate";
import { OAuthClientEdit } from "./oAuthClient/OAuthClientEdit";
import { OAuthClientShow } from "./oAuthClient/OAuthClientShow";
import { AccessCodeList } from "./accessCode/AccessCodeList";
import { AccessCodeCreate } from "./accessCode/AccessCodeCreate";
import { AccessCodeEdit } from "./accessCode/AccessCodeEdit";
import { AccessCodeShow } from "./accessCode/AccessCodeShow";
import { CalendarCacheList } from "./calendarCache/CalendarCacheList";
import { CalendarCacheCreate } from "./calendarCache/CalendarCacheCreate";
import { CalendarCacheEdit } from "./calendarCache/CalendarCacheEdit";
import { CalendarCacheShow } from "./calendarCache/CalendarCacheShow";
import { TempOrgRedirectList } from "./tempOrgRedirect/TempOrgRedirectList";
import { TempOrgRedirectCreate } from "./tempOrgRedirect/TempOrgRedirectCreate";
import { TempOrgRedirectEdit } from "./tempOrgRedirect/TempOrgRedirectEdit";
import { TempOrgRedirectShow } from "./tempOrgRedirect/TempOrgRedirectShow";
import { AvatarList } from "./avatar/AvatarList";
import { AvatarCreate } from "./avatar/AvatarCreate";
import { AvatarEdit } from "./avatar/AvatarEdit";
import { AvatarShow } from "./avatar/AvatarShow";
import { OutOfOfficeEntryList } from "./outOfOfficeEntry/OutOfOfficeEntryList";
import { OutOfOfficeEntryCreate } from "./outOfOfficeEntry/OutOfOfficeEntryCreate";
import { OutOfOfficeEntryEdit } from "./outOfOfficeEntry/OutOfOfficeEntryEdit";
import { OutOfOfficeEntryShow } from "./outOfOfficeEntry/OutOfOfficeEntryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Calendar Service1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Host"
          list={HostList}
          edit={HostEdit}
          create={HostCreate}
          show={HostShow}
        />
        <Resource
          name="EventType"
          list={EventTypeList}
          edit={EventTypeEdit}
          create={EventTypeCreate}
          show={EventTypeShow}
        />
        <Resource
          name="Credential"
          list={CredentialList}
          edit={CredentialEdit}
          create={CredentialCreate}
          show={CredentialShow}
        />
        <Resource
          name="DestinationCalendar"
          list={DestinationCalendarList}
          edit={DestinationCalendarEdit}
          create={DestinationCalendarCreate}
          show={DestinationCalendarShow}
        />
        <Resource
          name="UserPassword"
          list={UserPasswordList}
          edit={UserPasswordEdit}
          create={UserPasswordCreate}
          show={UserPasswordShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Membership"
          list={MembershipList}
          edit={MembershipEdit}
          create={MembershipCreate}
          show={MembershipShow}
        />
        <Resource
          name="VerificationToken"
          list={VerificationTokenList}
          edit={VerificationTokenEdit}
          create={VerificationTokenCreate}
          show={VerificationTokenShow}
        />
        <Resource
          name="InstantMeetingToken"
          list={InstantMeetingTokenList}
          edit={InstantMeetingTokenEdit}
          create={InstantMeetingTokenCreate}
          show={InstantMeetingTokenShow}
        />
        <Resource
          name="BookingReference"
          list={BookingReferenceList}
          edit={BookingReferenceEdit}
          create={BookingReferenceCreate}
          show={BookingReferenceShow}
        />
        <Resource
          name="Attendee"
          list={AttendeeList}
          edit={AttendeeEdit}
          create={AttendeeCreate}
          show={AttendeeShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="Schedule"
          list={ScheduleList}
          edit={ScheduleEdit}
          create={ScheduleCreate}
          show={ScheduleShow}
        />
        <Resource
          name="Availability"
          list={AvailabilityList}
          edit={AvailabilityEdit}
          create={AvailabilityCreate}
          show={AvailabilityShow}
        />
        <Resource
          name="SelectedCalendar"
          list={SelectedCalendarList}
          edit={SelectedCalendarEdit}
          create={SelectedCalendarCreate}
          show={SelectedCalendarShow}
        />
        <Resource
          name="EventTypeCustomInput"
          list={EventTypeCustomInputList}
          edit={EventTypeCustomInputEdit}
          create={EventTypeCustomInputCreate}
          show={EventTypeCustomInputShow}
        />
        <Resource
          name="ResetPasswordRequest"
          list={ResetPasswordRequestList}
          edit={ResetPasswordRequestEdit}
          create={ResetPasswordRequestCreate}
          show={ResetPasswordRequestShow}
        />
        <Resource
          name="ReminderMail"
          list={ReminderMailList}
          edit={ReminderMailEdit}
          create={ReminderMailCreate}
          show={ReminderMailShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Webhook"
          list={WebhookList}
          edit={WebhookEdit}
          create={WebhookCreate}
          show={WebhookShow}
        />
        <Resource
          name="Impersonation"
          list={ImpersonationList}
          edit={ImpersonationEdit}
          create={ImpersonationCreate}
          show={ImpersonationShow}
        />
        <Resource
          name="ApiKey"
          list={ApiKeyList}
          edit={ApiKeyEdit}
          create={ApiKeyCreate}
          show={ApiKeyShow}
        />
        <Resource
          name="HashedLink"
          list={HashedLinkList}
          edit={HashedLinkEdit}
          create={HashedLinkCreate}
          show={HashedLinkShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="AppModel"
          list={AppModelList}
          edit={AppModelEdit}
          create={AppModelCreate}
          show={AppModelShow}
        />
        <Resource
          name="AppRoutingFormsForm"
          list={AppRoutingFormsFormList}
          edit={AppRoutingFormsFormEdit}
          create={AppRoutingFormsFormCreate}
          show={AppRoutingFormsFormShow}
        />
        <Resource
          name="AppRoutingFormsFormResponse"
          list={AppRoutingFormsFormResponseList}
          edit={AppRoutingFormsFormResponseEdit}
          create={AppRoutingFormsFormResponseCreate}
          show={AppRoutingFormsFormResponseShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="WorkflowStep"
          list={WorkflowStepList}
          edit={WorkflowStepEdit}
          create={WorkflowStepCreate}
          show={WorkflowStepShow}
        />
        <Resource
          name="Workflow"
          list={WorkflowList}
          edit={WorkflowEdit}
          create={WorkflowCreate}
          show={WorkflowShow}
        />
        <Resource
          name="WorkflowsOnEventType"
          list={WorkflowsOnEventTypeList}
          edit={WorkflowsOnEventTypeEdit}
          create={WorkflowsOnEventTypeCreate}
          show={WorkflowsOnEventTypeShow}
        />
        <Resource
          name="Deployment"
          list={DeploymentList}
          edit={DeploymentEdit}
          create={DeploymentCreate}
          show={DeploymentShow}
        />
        <Resource
          name="WorkflowReminder"
          list={WorkflowReminderList}
          edit={WorkflowReminderEdit}
          create={WorkflowReminderCreate}
          show={WorkflowReminderShow}
        />
        <Resource
          name="WebhookScheduledTrigger"
          list={WebhookScheduledTriggerList}
          edit={WebhookScheduledTriggerEdit}
          create={WebhookScheduledTriggerCreate}
          show={WebhookScheduledTriggerShow}
        />
        <Resource
          name="BookingSeat"
          list={BookingSeatList}
          edit={BookingSeatEdit}
          create={BookingSeatCreate}
          show={BookingSeatShow}
        />
        <Resource
          name="VerifiedNumber"
          list={VerifiedNumberList}
          edit={VerifiedNumberEdit}
          create={VerifiedNumberCreate}
          show={VerifiedNumberShow}
        />
        <Resource
          name="Feature"
          list={FeatureList}
          edit={FeatureEdit}
          create={FeatureCreate}
          show={FeatureShow}
        />
        <Resource
          name="SelectedSlot"
          list={SelectedSlotList}
          edit={SelectedSlotEdit}
          create={SelectedSlotCreate}
          show={SelectedSlotShow}
        />
        <Resource
          name="OAuthClient"
          list={OAuthClientList}
          edit={OAuthClientEdit}
          create={OAuthClientCreate}
          show={OAuthClientShow}
        />
        <Resource
          name="AccessCode"
          list={AccessCodeList}
          edit={AccessCodeEdit}
          create={AccessCodeCreate}
          show={AccessCodeShow}
        />
        <Resource
          name="CalendarCache"
          list={CalendarCacheList}
          edit={CalendarCacheEdit}
          create={CalendarCacheCreate}
          show={CalendarCacheShow}
        />
        <Resource
          name="TempOrgRedirect"
          list={TempOrgRedirectList}
          edit={TempOrgRedirectEdit}
          create={TempOrgRedirectCreate}
          show={TempOrgRedirectShow}
        />
        <Resource
          name="Avatar"
          list={AvatarList}
          edit={AvatarEdit}
          create={AvatarCreate}
          show={AvatarShow}
        />
        <Resource
          name="OutOfOfficeEntry"
          list={OutOfOfficeEntryList}
          edit={OutOfOfficeEntryEdit}
          create={OutOfOfficeEntryCreate}
          show={OutOfOfficeEntryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
